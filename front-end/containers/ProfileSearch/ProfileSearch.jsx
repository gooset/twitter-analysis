import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Searchbar, LottieAnimation, Error } from '../../components';
import { tweetsModalActions } from '../../store/slices/tweetsModal';
import { timelineActions } from '../../store/slices/tweetsTimeline';
import { searchbarActions } from '../../store/slices/searchbar';

const compareQueries = (query, previousQuery, dispatch, setPreviousQuery) => {
  if (query === previousQuery) {
    dispatch(searchbarActions.setIsLoading(false));
    dispatch(tweetsModalActions.isOpen(true));
    return 'sameQuery';
  }

  if (query !== previousQuery) {
    dispatch(timelineActions.clearTweets());
  }

  setPreviousQuery(query);
}

const ProfileSearch = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [previousQuery, setPreviousQuery] = useState('');

  const handleSubmitProfile = async (query) => {
    dispatch(searchbarActions.setIsLoading(true));


    if (error) setError(null);

    //* @ -> fetch user timeline
    const comparison = compareQueries(query, previousQuery, dispatch, setPreviousQuery);
    if (comparison === 'sameQuery') return;

    const username = query;


    const res = await axios.get(`http://localhost:8000/user/?username=${username}`);
    const results = await res.data;
    const tweets = results.data;

    if (!tweets) {
      dispatch(searchbarActions.setIsLoading(false));
      setError('Le profil que vous recherchez n\'existe pas. ');
      return;
    }


    if (tweets?.length === 0) {
      dispatch(searchbarActions.setIsLoading(false));
      setError(`${query} n'a pas de tweet disponible.`);
      return;
    }

    dispatch(searchbarActions.setIsLoading(false));
    dispatch(tweetsModalActions.isOpen(true));

    dispatch(timelineActions.setTweets({ tweets }))

  }

  return (
    <div id="profileSearch" className={`flex res-f-height section-padding`}>
      <Searchbar
        description="Rechercher par profil"
        placeholder="@nom du profile"
        handleSubmit={handleSubmitProfile}
      >
        {error && <Error message={error} marginTop />}
      </Searchbar>
    </div>
  )
}

export default ProfileSearch
