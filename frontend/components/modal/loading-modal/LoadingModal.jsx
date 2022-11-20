import styles from './LoadingModal.module.scss';

// LoadingModal component
const LoadingModal = props => {
    return (
        // Render a div element with the appropriate class names
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

// Export the LoadingModal component as the default export
export default LoadingModal;

