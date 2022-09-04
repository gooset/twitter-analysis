import { useSelector } from 'react-redux';

import LoadingIcon from '../../../../assets/twitter-icon.gif';
import TweetBox from '../../../TweetBox/TweetBox';

const ScoredTweets = () => {
    const {tweets} = useSelector(state => state.tweetsTimeline.tweets);
    const {showUserProfile} = useSelector(state => state.tweetsTimeline.showUserProfile);
    
    //* fetching tweets 
    
    //Tag related tweets
    if(tweets.length) {
        return (
            tweets.map((tweet, index, ) => {
                return ( 
                    <TweetBox 
                        key={index}
                        tweetId={tweet.id}
                        tweetText={tweet.tweet_content}
                        tagname={tweet.tagname}
                        username= {tweet.username}  
                        createdAt={tweet.created_at}
                        showProfile={showUserProfile}
                        userImage={tweet.profile_img}
                        likesCount={tweet.likes_count}
                        profilAnalysis={[tweet.openness, tweet.conscientiousness, tweet.extraversion, tweet.agreeableness, tweet.neuroticism]}

                    />
                )
            })
        )
    }

    return (
        <>
            { !tweets.length && <LoadingIcon/>}
            { tweets.length && (
                tweets.map((tweet, index) => {
                    //tweetAnalysis: {results: [] || errorMessage, id: 'tweetId of the text analysed'} 
                   
                    return ( 
                        <TweetBox 
                            key={index}
                            tweetId={tweet.id}
                            tweetText={tweet.tweet_text}
                            username= {tweet.username}
                            createdAt={tweet.created_at}
                            showProfile={showUserProfile}
                            userImage={tweet.profile_img}
                            profilAnalysis={[tweet.openness, tweet.conscientiousness, tweet.extraversion, tweet.agreeableness, tweet.neuroticism]}
                        />
                    )
                })
            )}
        </>
    )
}

export default ScoredTweets;
