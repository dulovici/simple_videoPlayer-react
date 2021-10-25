
import React, { useRef, useEffect } from 'react';
import './videoScreen.scss';
import video from '../../Videos/clip2.mp4'
import ControlPanel from '../ControlPanel/ControlPanel';

function VideoScreen() {

    const videoRef = useRef(null)
    

    return (
        <div className='video-screen'>
            <video ref={videoRef} width="850" height="478" src={video} />

            <ControlPanel videoRef={videoRef} />
        </div>
    )
}

export default VideoScreen
