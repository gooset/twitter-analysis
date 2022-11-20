import { useSelector } from 'react-redux';
import styles from './user-section.module.scss';
import twitterLogo from '../../../../assets/twitter-logo.svg';

const UserSection = () => {
  const { tweets } = useSelector(state => state.tweetsTimeline.tweets);
  
  const firstTweet = tweets[0]; // Retrieve the first tweet from the array

  return (
    <div className={styles.userSection}>
      <div className={styles.userSection_info}>
        <img
          className={`${styles.userSection_infoImg} ${styles.el}`}
          src={firstTweet.profile_img}
          draggable={false}
          alt={firstTweet.tagname ? `${firstTweet.tagname}'s profile picture` : 'Twitter logo'}
          title={firstTweet.tagname ? `${firstTweet.tagname}'s profile picture` : 'Twitter logo'}
        />
        <span className={`${styles.userSection_infoName} ${styles.el}`}>
          <span className={styles.topicName}>
            {firstTweet.tagname ? firstTweet.tagname.toUpperCase() : firstTweet.username.toUpperCase()}
          </span>
        </span>
      </div>
    </div>
  );
}

export default UserSection;

