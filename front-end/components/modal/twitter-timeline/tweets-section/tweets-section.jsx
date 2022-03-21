import { useSelector } from 'react-redux';
import ScoredTweets from './scored-tweets';
import styles from './tweets-section.module.scss';

const TweetsSection = () => {
  const { tweets } = useSelector(state => state.tweetsTimeline.tweets);

  const TDLength = tweets.length;

  return (
    <div className={styles.tweetsSection}>
      <h6 className={styles.title}>{TDLength >= 1 && `Derniers ${TDLength} tweets`}</h6>
      <ScoredTweets />
    </div>
  );
};

export default TweetsSection;

