import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';


import { Header, ProfileSearch, QuerySearch, AnalyseTweet, AnalyseTweets } from '../containers';
import TwitterTimeline from '../components/modal/twitter-timeline/twitter-timeline';

const Home = () => {
  const modalState = useSelector(state => state.tweetsModal.isOpen);
  useEffect(() => {  
    if(modalState){
      document.body.style.overflowY = "hidden"
    }else{
      document.body.style.overflowY = "scroll"
    }
  }, [modalState])

  return (
    <div style={{width: '100%'}}>
      {modalState && (
        ReactDOM.createPortal(<TwitterTimeline/>, 
          document.getElementById("modal"))
      )}
      <Header/>
      <ProfileSearch/>
      <QuerySearch/>
      <AnalyseTweets/>
      <AnalyseTweet/>
    </div>
  )
}

export default Home;
