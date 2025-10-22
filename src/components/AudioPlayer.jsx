import { useState, useRef, useEffect } from 'react';

function AudioPlayer({ audioFiles, title }) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      setCurrentTime(0);
    }
  }, [currentTrack]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    if (currentTrack < audioFiles.length - 1) {
      setCurrentTrack(currentTrack + 1);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setCurrentTrack(0);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const skipForward = () => {
    audioRef.current.currentTime = Math.min(currentTime + 10, duration);
  };

  const skipBackward = () => {
    audioRef.current.currentTime = Math.max(currentTime - 10, 0);
  };

  const nextTrack = () => {
    if (currentTrack < audioFiles.length - 1) {
      setCurrentTrack(currentTrack + 1);
      setIsPlaying(true);
    }
  };

  const previousTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
      setIsPlaying(true);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="audio-player-container">
      <div className="audio-player-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="audio-player-title">
          <span className="audio-icon">🎧</span>
          <span>Listen to {title}</span>
        </div>
        <button className="audio-expand-btn">
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <div className="audio-player-content">
          <audio
            ref={audioRef}
            src={audioFiles[currentTrack]}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
          />

          {/* Track Info */}
          {audioFiles.length > 1 && (
            <div className="audio-track-info">
              Part {currentTrack + 1} of {audioFiles.length}
            </div>
          )}

          {/* Progress Bar */}
          <div className="audio-progress-container">
            <span className="audio-time">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleSeek}
              className="audio-progress-bar"
            />
            <span className="audio-time">{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="audio-controls">
            {audioFiles.length > 1 && (
              <button
                onClick={previousTrack}
                className="audio-control-btn"
                disabled={currentTrack === 0}
              >
                ⏮
              </button>
            )}
            
            <button onClick={skipBackward} className="audio-control-btn">
              ⏪
            </button>
            
            <button onClick={togglePlayPause} className="audio-play-btn">
              {isPlaying ? '⏸' : '▶'}
            </button>
            
            <button onClick={skipForward} className="audio-control-btn">
              ⏩
            </button>

            {audioFiles.length > 1 && (
              <button
                onClick={nextTrack}
                className="audio-control-btn"
                disabled={currentTrack === audioFiles.length - 1}
              >
                ⏭
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;