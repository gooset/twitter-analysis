import styles from './LoadingModal.module.scss';

const LoadingModal = props => {
    return (
        <div className={`${styles.glass} ${styles.loadingModal}`}>
            <div className={styles.loadingBox}>
                <div className={styles.content}>
                    <img src="/static/images/twitter-icon.gif" alt="twitter-icon"/>
                    <span>Loading</span>
                </div>
            </div>
        </div>
    )
}

export default LoadingModal