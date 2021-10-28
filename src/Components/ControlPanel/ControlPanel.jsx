
import React from 'react';
import './controlPanel.scss';
import { BsPlayFill, BsFillVolumeUpFill, BsFillVolumeMuteFill, BsFillPauseFill, BsFullscreen } from 'react-icons/bs';

function ControlPanel(props) {

    const {
        playerState,
        togglePlay,
        handleVideoProgress,
        handleVideoSpeed,
        handleVolume,
        toggleMute,
        toogleFullScreen
    } = props;



    return (
        <div className='control-panel'>
            {
                playerState.isPlaying
                    ? <BsFillPauseFill
                        onClick={togglePlay}
                        size='1.5em'
                        color='white'
                        style={{ cursor: 'pointer' }}
                    />
                    : <BsPlayFill
                        onClick={togglePlay}
                        size='1.5em'
                        color='white'
                        style={{ cursor: 'pointer' }}
                    />
            }

            <input
                className='progres'
                type="range"
                min="0"
                max="100"
                value={playerState.progress}
                onChange={(e) => handleVideoProgress(e)}
                style={{ cursor: 'pointer' }}
            />

            <select
                className="velocity"
                value={playerState.speed}
                onChange={(e) => handleVideoSpeed(e)}
                style={{ cursor: 'pointer' }}
            >
                <option value="0.50">0.50x</option>
                <option value="1">1x</option>
                <option value="1.25">1.25x</option>
                <option value="2">2x</option>
            </select>

            <input
                className='volume'
                type="range"
                min="1"
                max="100"
                value={playerState.volume * 100}
                onChange={(e) => handleVolume(e)}
                style={{ cursor: 'pointer' }}
            />

            {
                playerState.isMuted
                    ? <BsFillVolumeMuteFill
                        onClick={toggleMute}
                        size='1.5em'
                        color='white'
                        style={{ cursor: 'pointer' }}
                    />
                    : <BsFillVolumeUpFill
                        onClick={toggleMute}
                        size='1.5em'
                        color='white'
                        style={{ cursor: 'pointer' }}
                    />
            }

            <BsFullscreen
                onClick={toogleFullScreen}
                size='1.5em'
                color='white'
                style={{ cursor: 'pointer' }}
            />
        </div>
    )
}

export default ControlPanel

