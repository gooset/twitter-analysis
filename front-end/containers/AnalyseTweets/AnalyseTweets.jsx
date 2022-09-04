import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import {Searchbar, Error} from '../../components';
import {tweetsModalActions} from '../../store/slices/tweetsModal';
import tweetsTimeline, {timelineActions} from '../../store/slices/tweetsTimeline';
import {searchbarActions} from '../../store/slices/searchbar';
import { BsDisplay } from 'react-icons/bs';
 


const AnalyseTweets = () => {
    
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    
    const handleSubmit = async () => {
        const result = await fetch(`/api/tweets`);
      
        const results = await result.json();
        const tweets = results.data;

        dispatch(searchbarActions.setIsLoading(false));
        dispatch(tweetsModalActions.isOpen(true));

        dispatch(timelineActions.setTweets({tweets}))

        dispatch(timelineActions.setShowUserProfile(true));
    }

    return (
        <div id="analyseTweets" className={`flex res-f-height section-padding`}>
          <Searchbar 
            description="Pour tester appuyez sur submit" 
            placeholder="" 
            handleSubmit={handleSubmit}
          >
            {error && <Error message={error} marginTop/>}
          </Searchbar>
        </div>
    )
}
export default AnalyseTweets 
