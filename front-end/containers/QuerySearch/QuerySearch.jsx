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

  const handleSubmitQuery = async (query) => {
    dispatch(timelineActions.clearTweets());
    const term = query;
    const res = await axios.get(`http://localhost:8000/search/?term=${query}`);
    const results = await res.data;
    const tweets = results.data;


    if (!tweets || tweets.length === 0) {
      dispatch(searchbarActions.setIsLoading(false));
      setError('Aucune recherche correspondant au mot clé. ');
      return;
    }

    dispatch(searchbarActions.setIsLoading(false));
    dispatch(tweetsModalActions.isOpen(true));

    dispatch(timelineActions.setTweets({ tweets }))

  }

  return (
    <div id="querySearch" className={`flex res-f-height section-padding`}>
      <Searchbar
        description="Rechercher par mot clé"
        placeholder="Entrer un mot clé!"
        handleSubmit={handleSubmitQuery}
      >
        {error && <Error message={error} querySearch marginTop />}
      </Searchbar>
    </div>
  )
}

export default QuerySearch

