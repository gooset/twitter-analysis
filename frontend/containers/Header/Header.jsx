import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import axios from 'axios';

import styles from './Header.module.scss';
import twitterLogo from '../../assets/twitter-logo.svg';

import Button from '../../components/ButtonBox/ButtonBox';
import { tweetsModalActions } from '../../store/slices/tweetsModal';
import tweetsTimeline, { timelineActions } from '../../store/slices/tweetsTimeline';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const res = await axios.get('http://localhost:8000/tweets');
      const results = await res.data;
      const tweets = results.data;
      dispatch(timelineActions.setTweets({ tweets }));
      dispatch(tweetsModalActions.isOpen(true));
      dispatch(timelineActions.setShowUserProfile(true));
    } catch (error) {
      console.log('Error fetching recent publications:', error);
    }
  };

  return (
    <div className={`${styles.container} ${styles.flex} flex f-height section-padding`}>
      <div className={styles.left}>
        <h2 className={styles.left__title}>Twitter Analysis</h2>
        <p className={styles.left__desc}>ANALYZE USER PROFILES ON TWITTER</p>
        <div className={styles.left__actions}>
          <Link className={styles.left__actions_btn} to="profileSearch" duration={500}>
            Search by Profile
          </Link>
          <Link className={styles.left__actions_btn} to="querySearch" duration={500}>
            Search by Keyword
          </Link>
          <Link className={styles.left__actions_btn} to="analyseTweet" duration={500}>
            Analyze Tweet
          </Link>
          <Button className={styles.left__actions_btn} type="button" handleSubmit={handleSubmit}>
            Recent Publications
          </Button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__twitterLogo}>
          <Image src={twitterLogo} alt="Twitter Icon" draggable={false} width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Header;

