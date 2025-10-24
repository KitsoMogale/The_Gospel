import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import prayerBgVideo from '../assets/videos/prayer-bg.mp4';
import prayerAudio from '../assets/audio/prayer.wav';

function Prayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const prayerText = `
    Heavenly Father, Creator of Heaven and Earth, Glory be to Your Mighty Name. I pray to You this day that I choose to place my faith in Your Son, Jesus Christ.
    I acknowledge that I am a sinner in need of Your Grace and Forgiveness. I pray therefore that You would wash me clean by the precious blood of Jesus Christ, and make me a new creation in Him.
   I pray that You would touch my heart and soul, and fill me with Your Holy Spirit. Help me to turn away from my old ways and to follow You all the days of my life, that I may live for Your glory, with Your Peace, Joy and Righteousness.
    Thank You for the gift of eternal life through Jesus Christ. I pray that You would help me to grow in my faith and to become more like Him each day. I pray that You would use me to be a light in this world, sharing Your Love and Truth with those around me. 
    
    I pray that You would protect me from the evil one and the lies of this world, that I may remain in Your Truth, Love and Grace. I pray that You would give me the strength and courage to stand firm in my faith, even in the face of trials and temptations.
    I believe that by Your Grace and Mercy, I am delivered from sin, depression, fear and death, and that Christ lived for me, died for me, and rose again, that I may have eternal life with You.

    Thank You for having protected me throughout my life, and for giving me a Hope for a future of prosperity with You forever in Your Kingdom.
    I pray that You continue to Protect me and my family and keep us safe in Your Grace and Loving Care forever and ever.

    Thank You, Father, for hearing my prayer. I trust in Your promises and Your unfailing Love. I pray all these things in the Name of Your Son, Jesus Christ. Amen.
  `;

  const togglePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    
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
    setIsPlaying(false);
    setHasStarted(false);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleContinue = () => {
    setShowCelebration(true);
    
    // Navigate home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 10000);
  };

  // Generate confetti particles
  const generateConfetti = () => {
    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1,
        color: ['#FFD700', '#FFA500', '#FF6347', '#4CAF50', '#2196F3'][Math.floor(Math.random() * 5)]
      });
    }
    return particles;
  };

  return (
    <div className="prayer-page">
      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="celebration-overlay">
          <div className="confetti-container">
            {generateConfetti().map(particle => (
              <div
                key={particle.id}
                className="confetti"
                style={{
                  left: `${particle.left}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  backgroundColor: particle.color
                }}
              />
            ))}
          </div>
          <div className="celebration-message">
            <div className="celebration-icon">🎉</div>
            <h1 className="celebration-title">Congratulations!</h1>
            <p className="celebration-text">
              You are now saved in Christ
            </p>
            <div className="celebration-verse">
              "Therefore, if anyone is in Christ, he is a new creation.<br />
              The old has passed away; behold, the new has come."<br />
              <span className="celebration-reference">— 2 Corinthians 5:17</span>
            </div>
          </div>
        </div>
      )}

      {/* Static Background */}
      <div className="prayer-static-background"></div>

      {/* Content */}
      <div className="prayer-content">
        <div className="prayer-container">
          {/* Header */}
          <div className="prayer-header">
            <div className="prayer-icon">🙏</div>
            <h1 className="prayer-title">A Prayer of Salvation</h1>
            <p className="prayer-subtitle">
              If you'd like to receive Jesus Christ as your Savior, pray this prayer with us
            </p>
          </div>

          {/* Audio Player */}
          <div className="prayer-audio-section">
            <audio
              ref={audioRef}
              src={prayerAudio}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
            />

            {!hasStarted && (
              <button onClick={togglePlayPause} className="prayer-start-button">
                <span className="prayer-start-icon">▶</span>
                <span>Pray Along With Audio</span>
              </button>
            )}

            {hasStarted && (
              <div className="prayer-controls">
                <button onClick={togglePlayPause} className="prayer-control-button">
                  {isPlaying ? '⏸' : '▶'}
                </button>
                
                <div className="prayer-progress">
                  <span className="prayer-time">{formatTime(currentTime)}</span>
                  <div className="prayer-progress-bar">
                    <div 
                      className="prayer-progress-fill"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                  <span className="prayer-time">{formatTime(duration)}</span>
                </div>
              </div>
            )}

            <p className="prayer-instruction">
              {!hasStarted 
                ? 'You can pray along with the audio, or simply read and pray in your heart' 
                : isPlaying 
                  ? 'Follow along as the prayer is spoken...'
                  : 'Paused - Continue when ready'}
            </p>
          </div>

          {/* Prayer Text with Video Background */}
          <div className={`prayer-text-container ${hasStarted ? 'prayer-active' : ''}`}>
            {/* Video Background for Prayer Block */}
            <video
              className="prayer-block-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={prayerBgVideo} type="video/mp4" />
            </video>
            <div className="prayer-block-overlay"></div>
            
            <div className="prayer-text">
              {prayerText.split('\n').map((line, index) => (
                line.trim() ? (
                  <p key={index} className="prayer-line">
                    {line.trim()}
                  </p>
                ) : (
                  <div key={index} className="prayer-space"></div>
                )
              ))}
            </div>
          </div>

          {/* What's Next Section */}
          <div className="prayer-next-section">
            <div className="prayer-divider"></div>
            <h2 className="prayer-next-title">What Happens Now?</h2>
            <div className="prayer-next-cards">
              <div className="prayer-next-card">
                <span className="prayer-next-icon">📖</span>
                <h3>Read God's Word</h3>
                <p>Start reading the Bible daily. Begin with the Gospel of John.</p>
              </div>
              <div className="prayer-next-card">
                <span className="prayer-next-icon">🙏</span>
                <h3>Talk to God</h3>
                <p>Prayer is conversation with God. Share everything with Him.</p>
              </div>
              <div className="prayer-next-card">
                <span className="prayer-next-icon">⛪</span>
                <h3>Find a Church</h3>
                <p>Connect with other believers in a local church community.</p>
              </div>
            </div>

            <button onClick={handleContinue} className="prayer-continue-button">
              Done
              <span className="prayer-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prayer;