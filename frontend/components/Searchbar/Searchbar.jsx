import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Searchbar.module.scss';
import Error from '../Error/Error';
import { tweetsActions } from '../../store/slices/tweetBox';

const Searchbar = ({ children, placeholder, description, handleSubmit, querySearch }) => {
  const dispatch = useDispatch();
  const { displayTweetBox: tweetBoxIsVisible, tweetDataExists } = useSelector(state => state.tweetBox);
  const { isLoading } = useSelector(state => state.searchbar);
  const [query, setQuery] = useState('');
  const [previousQuery, setPreviousQuery] = useState('');
  const [error, setError] = useState(null);

  const submitQueryWithKey = (e, functionToCall) => {
    if (e.charCode === 13) {
      if (functionToCall === 'getQuerySearch') getQuerySearch();
      if (functionToCall === 'getProfileSearch') getProfileSearch();
    }
  };

  const getQuerySearch = () => {
    if (!query) {
      setError("Input field shouldn't be empty");
      return;
    }

    handleSubmit(query);
  };

  const getProfileSearch = () => {
    if (!query) {
      setError("Input field shouldn't be empty");
      return;
    }

    handleSubmit(query);
  };

  return (
    <div className={styles.analyseProfile__searchBar}>
      <h2>{description}</h2>
      <div className={styles.analyseProfile__searchBar_inputContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value.trim())}
          onKeyPress={(e) => submitQueryWithKey(e, querySearch ? 'getQuerySearch' : 'getProfileSearch')}
        />

        {isLoading ? (
          <button className={styles.analyseProfile__searchBar_btn} style={{ cursor: 'default' }} type="button">
            <div className={styles.analyseProfile__searchBar_loading}>
              <AiOutlineLoading3Quarters color="#03A7F4" size="23" />
            </div>
          </button>
        ) : (
          <button
            className={styles.analyseProfile__searchBar_btn}
            type="submit"
            onClick={querySearch ? getQuerySearch : getProfileSearch}
          >
            <BsSearch color="#03A7F4" size="18" />
          </button>
        )}
      </div>

      {error && <Error message={error} />}

      {/* Contains the <tweetBox/> and <Error/> */}
      {children}
    </div>
  );
};

export default Searchbar;

