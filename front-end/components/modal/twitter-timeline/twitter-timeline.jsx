// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { tweetsModalActions } from '../../../store/slices/tweetsModal';
import TweetsSection from './tweets-section/tweets-section';
import styles from './twitter-timeline.module.scss';
import UserSection from './user-section/user-section';

const TwitterTimeline = () => {
	
    // const deactivateModal = () => {
    //     dispatch(tweetsModalActions.isOpen(false));
    // }

    return(
        <>
            <div className={styles.tweetsModal}>
                <UserSection/>
                <TweetsSection/>
            </div>  
        </>
    )
}

export default TwitterTimeline;