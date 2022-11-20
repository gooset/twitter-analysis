import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Searchbar, LottieAnimation, Error } from '../../components';
import { tweetsModalActions } from '../../store/slices/tweetsModal';
import { timelineActions } from '../../store/slices/tweetsTimeline';
import { searchbarActions } from '../../store/slices/searchbar';

const QuerySearch = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const fetchTweetsByQuery = async (query) => {
    try {
      const res = await axios.get(`http://localhost:8000/search/?term=${query}`);
      const results = res.data;
      const tweets = results.data;

      if (!tweets || tweets.length === 0) {
        setError('No results found for the given keyword.');
        return;
      }

      dispatch(timelineActions.setTweets({ tweets }));
      dispatch(tweetsModalActions.isOpen(true));
    } catch (error) {
      setError('An error occurred while fetching tweets for the keyword.');
    } finally {
      dispatch(searchbarActions.setIsLoading(false));
    }
  };

  const handleSubmitQuery = async (query) => {
    dispatch(searchbarActions.setIsLoading(true));

    if (error) setError(null);

    await fetchTweetsByQuery(query);
  };

  return (
    <div id="querySearch" className="flex res-f-height section-padding">
      <Searchbar
        description="Search by keyword"
        placeholder="Enter a keyword!"
        handleSubmit={handleSubmitQuery}
      >
        {error && <Error message={error} querySearch marginTop />}
      </Searchbar>
    </div>
  );
};

export default QuerySearch;

