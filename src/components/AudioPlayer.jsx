function AudioPlayer({ src }) {
  if (!src) return null;
  
  return (
    <div className="audio-player">
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;