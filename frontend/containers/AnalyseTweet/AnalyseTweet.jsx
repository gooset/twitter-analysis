import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Searchbar, TweetBox, Error } from '../../components';
import { tweetsActions } from '../../store/slices/tweetBox';
import { searchbarActions } from '../../store/slices/searchbar';

const AnalyseTweetPage = () => {
  const dispatch = useDispatch();
  const { displayTweetBox } = useSelector((state) => state.tweetBox);

  const [tweetText, setTweetText] = useState('');
  const [tweetAuthor, setTweetAuthor] = useState({});
  const [tweetCreatedAt, setTweetCreatedAt] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (statusId) => {
    dispatch(searchbarActions.setIsLoading(true));

    try {
      const fetchedTweet = await (await fetch('/api/tweetos')).json();

      if (!fetchedTweet || fetchedTweet === undefined) {
        throw new Error("L'API n'est pas disponible, veuillez réessayer plus tard !");
      }

      setTweetText(fetchedTweet.tweet_content);
      setTweetCreatedAt(fetchedTweet.created_at);
      setTweetAuthor(fetchedTweet.username);

      dispatch(tweetsActions.displayTweetBox(true));
    } catch (error) {
      setError(error.message);
    } finally {
      dispatch(searchbarActions.setIsLoading(false));
    }
  };

  return (
    <div id="analyseTweet" className="flex res-f-height section-padding">
      <Searchbar
        handleSubmit={handleSubmit}
        searchByStatus
        description="Analyse le tweet sélectionné"
        placeholder="Enter the URL of a tweet (e.g., https://twitter.com/user/status/151458909249539)"
      >
        {error && <Error message={error} />}
        {displayTweetBox && (
          <TweetBox
            showProfile
            closeTweetBox
            tweetText={tweetText}
            createdAt={tweetCreatedAt}
            username={tweetAuthor.username}
            userImage={tweetAuthor.profile_img}
            tweetId={tweetAuthor.id}
          />
        )}
      </Searchbar>
    </div>
  );
};

export default AnalyseTweetPage;

