import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import {Searchbar,TweetBox, Error} from '../../components';
import { tweetsActions } from '../../store/slices/tweetBox';
import { searchbarActions } from '../../store/slices/searchbar';

const AnalyseTweet = () => {
  const dispatch = useDispatch();
  const {displayTweetBox} = useSelector(state => state.tweetBox);
  
  const [tweetText, setTweetText] = useState('');
  const [tweetAuthor, setTweetAuthor] = useState({});
  const [tweetCreatedAt, setTweetCreatedAt] = useState('');
  const [analysisError, setAnalysisError] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (statusId) => {
    dispatch(searchbarActions.setIsLoading(true));

    const fetchedTweet = await (await fetch('/api/tweetos')).json();

    if(!fetchedTweet || fetchedTweet === undefined){

      dispatch(searchbarActions.setIsLoading(false));
      setError("L'Api n'est pas disponible, essayer plus tard !.")
      return;
    }
    
    setTweetText(fetchedTweet.tweet_content);
    setTweetCreatedAt(fetchedTweet.created_at);
    setTweetAuthor(fetchedTweet.username);
    
    dispatch(tweetsActions.displayTweetBox(true));
    
    dispatch(searchbarActions.setIsLoading(false));
    
  }

  return (
    <div id="analyseTweet" className={`flex res-f-height section-padding`}>
        <Searchbar handleSubmit={handleSubmit} searchByStatus description="Analyse le tweet selectionné" placeholder="https://twitter.com/user/status/151458909249539">
          {
            error && (
              <Error message={error}/>
            )   
          }
          {
            displayTweetBox && (
              <TweetBox 
                showProfile 
                closeTweetBox 
                tweetText={fetchedTweet.tweet_content}
                createdAt={fetchedTweet.created_at}
                username={fetchedTweet.username}
                userImage={fetchedTweet.profile_img}
                tweetId={fetchedTweet.id}
              />  
            )
          }
        </Searchbar>
    </div>
  )
}

export default AnalyseTweet
