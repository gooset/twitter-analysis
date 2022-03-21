import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import { BiLike } from 'react-icons/bi';
import { IoIosCloseCircle } from 'react-icons/io';

import styles from './TweetBox.module.scss';
import { cleanText } from "../../utils/cleanText";
import Error from "../Error/Error";
import { tweetsActions } from "../../store/slices/tweetBox";

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
      {tweetId && (
        <div className={styles.topSection}>
          <a
            href={`https://twitter.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profile}
          >
            <div className={styles.profile__img}>
              <img
                width={30}
                height={30}
                src={username}
                alt={`${username} photo`}
              />
            </div>
            <span className={styles.profile__username}>
              {username ? username : ''}
            </span>
          </a>

          <div className={styles.tweet__profile}>
            <ul className={styles.fetchingEmotions}>
              {profilAnalysis[0] === 1 ? 'OPEN' : 'CLOS'}
            </ul>
            <ul className={styles.fetchingEmotions}>
              {profilAnalysis[1] === 1 ? 'CONSC' : 'LESSCONSC'}
            </ul>
            <ul className={styles.fetchingEmotions}>
              {profilAnalysis[2] === 1 ? 'EXT' : 'LESSEXT'}
            </ul>
            <ul className={styles.fetchingEmotions}>
              {profilAnalysis[3] === 1 ? 'AGREE' : 'LESSAGREE'}
            </ul>
            <ul className={styles.fetchingEmotions}>
              {profilAnalysis[4] === 1 ? 'NEURO' : 'LESSNEURO'}
            </ul>
          </div>
        </div>
      )}

      <div className={styles.tweet}>
        <div
          className={
            showProfile ? styles.tweet__text : styles.tweet__textModal
          }
        >
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
          )}
        </div>

        <div className={styles.tweet__data}>
          <ul className={styles.date}>
            {likesCount} <BiLike />
          </ul>
          <div className={styles.date}>{moment(createdAt).fromNow()}</div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;

