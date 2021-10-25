import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        speed: 1,
        volume: 50,
        isMuted: false,
        isFullScreen: false
    });

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };

    useEffect(() => {
        playerState.isPlaying
            ? videoElement.current.play()
            : videoElement.current.pause();
    }, [playerState.isPlaying, videoElement])

    const handleOnTimeUpdate = () => {
        const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        setPlayerState({
            ...playerState,
            progress,
        })
    }

    const handleVideoProgress = (event) => {
        const manualChange = Number(event.target.value);
        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        setPlayerState({
            ...playerState,
            progress: manualChange,
        });
    };

    const handleVideoSpeed = (event) => {
        const speed = Number(event.target.value);
        videoElement.current.playbackRate = speed;
        setPlayerState({
            ...playerState,
            speed,
        })
    }

    const handleVolume = (event) => {
        const manualVolume = Number(event.target.value / 100);
        videoElement.current.volume = manualVolume;
        setPlayerState({
            ...playerState,
            volume: manualVolume,
        })
    }

    const toggleMute = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };

    useEffect(() => {
        playerState.isMuted
            ? (videoElement.current.muted = true)
            : (videoElement.current.muted = false);
    }, [playerState.isMuted, videoElement]);

    const toogleFullScreen = () => {
        setPlayerState({
            ...playerState,
            isFullScreen: !playerState.isFullScreen,
        })
    }

    useEffect(() => {
        playerState.isFullScreen
            ? (videoElement.current.requestFullscreen())
            : (videoElement.current.webkitExitFullscreen())
    }, [playerState.isFullScreen, videoElement])


    return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        handleVolume,
        toggleMute,
        toogleFullScreen
    };
};

export default useVideoPlayer;