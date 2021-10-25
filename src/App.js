import './App.scss';
import react, {useRef} from 'react';
import video from '../src/Videos/clip2.mp4';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import useVideoPlayer from './Hooks/useVideoPlayer';

function App() {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute
  } = useVideoPlayer(videoElement);


  return (
    <div className="App">
      <div className='video-wr'>
          <video src={video} ref={videoElement} onTimeUpdate={handleOnTimeUpdate} />
      </div>
      <ControlPanel />
    </div>
  );
}

export default App;
