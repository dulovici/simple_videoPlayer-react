
import React, { useRef, useEffect } from 'react';
import './videoScreen.scss';
import video from '../../Videos/clip2.mp4'
import ControlPanel from '../ControlPanel/ControlPanel';

function VideoScreen() {

    const videoRef = useRef(null)

    const playVideo = () => {
        videoRef.current.play()
    }
    const pauseVideo = () => {
        videoRef.current.pause()
    }

    const muteVideo = () => {
        videoRef.current.muted = !videoRef.current.muted;
    }

    return (
        <div>
            <video ref={videoRef} width="850" height="478" src={video} />

            <button onClick={playVideo}>PLAY</button>
            <button onClick={pauseVideo}>PAUSE</button>
            <button onClick={muteVideo}>MUTE</button>
            <ControlPanel />
        </div>
    )
}

export default VideoScreen
