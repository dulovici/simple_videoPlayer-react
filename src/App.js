import './App.scss';
import react, { useState, useRef } from 'react';
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
    handleVolume,
    toggleMute,
    toogleFullScreen
  } = useVideoPlayer(videoElement);

  console.log(playerState)


  return (
    <div className="App">
      <div className='video-wr'>
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          onClick={togglePlay}
        />
        <ControlPanel
          playerState={playerState}
          togglePlay={togglePlay}
          handleVideoProgress={handleVideoProgress}
          handleVideoSpeed={handleVideoSpeed}
          handleVolume={handleVolume}
          toggleMute={toggleMute}
          toogleFullScreen={toogleFullScreen}
        />
      </div>

    </div>
  );
}

export default App;
