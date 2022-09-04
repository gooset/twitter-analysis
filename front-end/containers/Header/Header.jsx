import React from 'react';
import Image from 'next/image';
import {Link} from 'react-scroll';
import axios from 'axios';

import styles from './Header.module.scss'
import twitterLogo from '../../assets/twitter-logo.svg';


import Button from '../../components/ButtonBox/ButtonBox';
import {tweetsModalActions} from '../../store/slices/tweetsModal';
import tweetsTimeline, {timelineActions} from '../../store/slices/tweetsTimeline';
import {useSelector, useDispatch} from 'react-redux';



const Header = () => {

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // const result = await fetch(`/api/tweets`);
      const res = await axios.get('http://localhost:8000/tweets');
      const results = await res.data;
      const tweets = results.data;
      dispatch(timelineActions.setTweets({tweets}));
      dispatch(tweetsModalActions.isOpen(true));
      dispatch(timelineActions.setShowUserProfile(true));
  }
    
  return (
    <div 
      className={`${styles.container} 
      ${styles.flex} flex f-height section-padding`}>
      <div className={styles.left}>
        <h2 className={styles.left__title}>Analyse de Twitter</h2>
        <p className={styles.left__desc}>ANALYSE DES PROFILS DES UTILISATEURS DE TWITTER</p>
        <div className={styles.left__actions}>
          <Link className={styles.left__actions_btn} to='profileSearch' duration={500}>Rechercher par Profil</Link>
          <Link className={styles.left__actions_btn} to='querySearch' duration={500}>Rechercher par mot clé</Link>
          <Link className={styles.left__actions_btn} to='analyseTweet' duration={500}>Analyser tweet</Link>
          <Button className={styles.left__actions_btn} type="button" handleSubmit={handleSubmit}>Publications recentes</Button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__twitterLogo}>
          <Image src={twitterLogo} alt="Twitter Icon" draggable={false} width={200} height={200} />
        </div>
      </div>
    </div>
  )
}

export default Header
