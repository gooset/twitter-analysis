import datetime
import pendulum
import logging

import snscrape.modules.twitter as twitter
from langdetect import detect
from elasticsearch import Elasticsearch

import airflow
from airflow import DAG
from airflow.models import DagRun
from airflow.operators.python import PythonOperator

tweets_index = 'my_index'  # Name of the Elasticsearch index

location = "Abidjan"  # Location parameter for searching tweets
languages = ['fr', 'en']  # List of languages to filter the tweets
maxTweets = 20  # Maximum number of tweets to scrape

es = Elasticsearch('http://localhost:9200')  # Elasticsearch client instance


def create_index_if_not_exists():
    """
    Check if the Elasticsearch index exists and create it if it doesn't.
    """
    if not es.indices.exists(index=tweets_index):
        es.indices.create(index=tweets_index)


dag = DAG(
    dag_id="data_pipeline",
    description="DAG for extracting data from Twitter",
    start_date=pendulum.datetime(2022, 8, 9),
    schedule_interval='*/5 * * * *',
    catchup=False,
)


def get_most_recent_dag_run(dag_id):
    """
    Retrieve the most recent execution of the specified DAG.
    """
    dag_runs = DagRun.find(dag_id=dag_id)
    dag_runs.sort(key=lambda x: x.data_interval_end, reverse=True)
    return dag_runs[0] if dag_runs else None


def tweet_to_es_func():
    """
    Perform scraping with SNSCrape and store the tweets in Elasticsearch.
    """
    for i, tweet in enumerate(twitter.TwitterSearchScraper(f'near:{location} since:{start_time} until:{end_time}').get_items()):
        try:
            lang = detect(tweet.content)  # Detect the language of the tweet
        except:
            lang = 'error'

        if i >= maxTweets:
            break

        ids = []
        if lang in languages:
            tweet_data = {
                "id": tweet.id,
                "user_id": tweet.user.id,
                "username": tweet.user.username,
                "profil_created_at": tweet.user.created,
                "followersCount": tweet.user.followersCount,
                "friendsCount": tweet.user.friendsCount,
                "location": tweet.user.location,
                "tagname": tweet.user.displayname,
                "profile_img": tweet.user.profileImageUrl,
                "created_at": tweet.date,
                "tweet_content": tweet.content,
                "likes_count": tweet.likeCount,
                "tweet_url": tweet.url,
            }
            es.index(index=tweets_index, id=f'{tweet_data["id"]}', document=tweet_data)  # Store the tweet in Elasticsearch
            ids.append(tweet_data['user_id'])


# Get the most recent DAG run to determine the scraping time window
dag_run = get_most_recent_dag_run('data_pipeline')
if dag_run:
    start_time = int(dag_run.data_interval_start.timestamp())
    end_time = int(dag_run.data_interval_end.timestamp())


# Define a PythonOperator to execute the scraping function
tweet_es = PythonOperator(
    task_id="tweets_to_es",
    python_callable=tweet_to_es_func,
    dag=dag,
)

tweet_es  # Execute the workflow

