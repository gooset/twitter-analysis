import datetime, time
import pendulum
import logging


import snscrape.modules.twitter as twitter
from langdetect import detect
from elasticsearch import Elasticsearch
import json

import airflow 
from airflow import DAG 
from airflow.models import DagRun

from airflow.operators.python import PythonOperator 


tweets_index = 'my_index'

location="Abidjan"
languages=['fr', 'en']
maxTweets = 20

# Creation d'une instance python elasticsearch
es = Elasticsearch('http://localhost:9200')


# Verifie l'existence d'un index ou le cree si l'index n'existe pas
def get_instance_func():
    if not es.indices.exists(index=tweets_index):
        es.indices.create(index=tweets_index)
 

# Definition d'une instance DAG airflow
# L'interval d'execution est indique dans schedule_interval
dag = DAG(
    dag_id="data_pipeline",
    description="DAG pour extraction des donnees sur Twitter",
    start_date=pendulum.datetime(2022, 8, 9),
    schedule_interval='*/5 * * * *',
    catchup=False,
)

# Cette function va retourner la derniere execution de l'instance DAG
def get_most_recent_dag_run(dag_id):
    dag_runs = DagRun.find(dag_id=dag_id)
    dag_runs.sort(key=lambda x: x.data_interval_end, reverse=True)
    return dag_runs[0] if dag_runs else None


# On utilise la function get_most_recent_dag_run pour obtenir
# le derniere interval d'execution pour commencer le scraping 
# a la derniere execution du code
dag_run = get_most_recent_dag_run('data_pipeline')
if dag_run:
    start_time =  int(dag_run.data_interval_start.timestamp())
    end_time = int(dag_run.data_interval_end.timestamp())


# C'est la function qui nous permet de faire du scraping avec la framework
# SNSCrape et mettre les donnees dans sur notre instance elasticsearch 
def tweet_to_es_func():

    # try:
    #     conn = sqlite3.connect('user_of_day')
    #     cursor = conn.cursor()
    #     logging.info('Connected to SQLite')

    for i, tweet in enumerate(twitter.TwitterSearchScraper(f'near:{location} since:{start_time} until:{end_time}').get_items()):
        try:
            lang=detect(tweet.content)
        except:
            lang='error'
        if i >= maxTweets: break
        ids = []
        if lang in languages:
            tweet = {
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
                    
            es.index(index=tweets_index, id=f'{tweet["id"]}', document=tweet)
            ids.append(tweet['user_id'])
        # with open("ids.txt", "a") as f:
        #     for id in ids:
        #         f.write(f"{id}\n")
    

# On utilise un operateur python pour notre workflow 
tweet_es = PythonOperator(
    task_id="tweets_to_es",
    python_callable=tweet_to_es_func,
    dag=dag,
)

# Execution du workflow
tweet_es