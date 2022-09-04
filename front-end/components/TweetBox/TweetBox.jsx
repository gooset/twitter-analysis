import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import Image from 'next/image';
import moment from 'moment';
import 'moment/locale/fr';
import { BiLike } from 'react-icons/bi';
import { IoIosCloseCircle } from 'react-icons/io';

import styles from './TweetBox.module.scss';
import { cleanText } from "../../utils/cleanText";
import Error from "../Error/Error";
import { tweetsActions } from "../../store/slices/tweetBox";

// const EmotionResult = ({emotion, emotionValue}) => {
//     let emotionIcon;

//     switch (emotion) {
//       case 'ext':
//         emotionIcon = ext;
//         break;
//       case 'open':
//         emotionIcon = open;
//         break;
//       default:
//         break;
//     }

//     return(
//       <li className={styles.results__item}>
//         <Image 
//           src={emotionIcon} 
//           alt={emotion} 
//           title={emotion} 
//           height={emotion === 'open' ? 29 : 25}
//           width={emotion === 'open' ? 29 : 25} 
//         />
//         <span>{toPercent(emotionValue)}%</span>
//       </li>
//     )
// }

const TweetBox = ({
  showProfile,
  tweetText,
  createdAt,
  username,
  tagname,
  userImage,
  tweetId,
  likesCount,
  profilAnalysis,
}) => {

  const dispatch = useDispatch();

  const handleCloseTweetBox = () => {
    dispatch(tweetsActions.displayTweetBox(false))
  };

  return (
    <div className={styles.container}>
      {/* {showProfile && ( */}
      {tweetId && (

        <div className={styles.topSection}>
          <a href={`https://twitter.com/${username}`} target="_blank" rel="noopener noreferrer" className={`${styles.profile}`}>
            <div className={styles.profile__img}>
              <img width={30} height={30} src={username} alt={`${username} photo`} />
            </div>
            <span className={styles.profile__username}>{username ? username : ''}</span>
          </a>

          {/* {
            closeTweetBox && (
              <button className={styles.closeTweetBox} onClick={handleCloseTweetBox}>
                <IoIosCloseCircle size="25" color="#02547A"/>
              </button>
            )
          } */}

          <div className={styles.tweet__profile}>
            <ul className={styles.fetchingEmotions}>
              {profilAnalysis[0]==1 ? 'OPEN' : 'CLOS' }
            </ul>
            <ul className={styles.fetchingEmotions}>
              {profilAnalysis[1]==1 ? 'CONSC' : 'LESSCONSC' }
            </ul>
            <ul className={styles.fetchingEmotions}>
              {profilAnalysis[2]==1 ? 'EXT' : 'LESSEXT' }
            </ul>
            <ul className={styles.fetchingEmotions}>
            {profilAnalysis[3]==1 ? 'AGREE' : 'LESSAGREE' }
            </ul>
            <ul className={styles.fetchingEmotions}>
            {profilAnalysis[4]==1 ? 'NEURO' : 'LESSNEURO' }
            </ul>              
          </div>



        </div>
      )}


      <div className={styles.tweet}>
        <div className={showProfile ? `${styles.tweet__text}` : `${styles.tweet__textModal}`}>
          {tweetId ? (
            <a
              href={`https://twitter.com/${username}/status/${tweetId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tweetLink}
            >
              {cleanText(tweetText)}
            </a>
          ) : (
            cleanText(tweetText)
          )
          }
        </div>

        <div className={styles.tweet__data}>
          <ul className={styles.date}> { likesCount } <BiLike/> </ul>
          <div className={styles.date}>{moment(createdAt).fromNow()}</div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
