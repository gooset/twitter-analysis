import { useSelector } from 'react-redux';
import styles from './use-section.module.scss';

import twitterLogo from '../../../../assets/twitter-logo.svg';

const UserSection = () => {
    const {tweets}  = useSelector(state => state.tweetsTimeline.tweets);   

    return(
        <div className={styles.userSection}>
            <div className={styles.userSection_info}>
                <img 
                    className={`${styles.userSection_infoImg} ${styles.el}`} 
                    // src={tweets[0].profile_img ? tweets[0].profile_img : twitterLogo.src}
                    src={tweets[0].profile_img} 
                    draggable={false} 
                    alt={tweets[0].tagname ? `${tweets[0].tagname}'s profile picture` : 'Twitter logo'} 
                    title={tweets[0].tagname ? `${tweets[0].tagname}'s profile picture` : 'Twitter logo'}
                />
                <span className={`${styles.userSection_infoName} ${styles.el}`}>
                    <span className={styles.topicName}>
                        { tweets[0].tagname ? tweets[0].tagname.toUpperCase() : tweets[0].username.toUpperCase()  }
                    </span>
                </span>
            </div>
        </div>  
    )
}

export default UserSection;
