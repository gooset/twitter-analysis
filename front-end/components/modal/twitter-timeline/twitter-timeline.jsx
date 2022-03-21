import { tweetsModalActions } from '../../../store/slices/tweetsModal';
import TweetsSection from './tweets-section/tweets-section';
import styles from './twitter-timeline.module.scss';
import UserSection from './user-section/user-section';

const TwitterTimeline = () => {
    return (
        <div className={styles.tweetsModal}>
            <UserSection />
            <TweetsSection />
        </div>
    );
};

export default TwitterTimeline;

