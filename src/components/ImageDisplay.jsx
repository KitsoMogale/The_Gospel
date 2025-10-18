function ImageDisplay({ src, alt }) {
  return (
    <div className="image-display">
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
      />
    </div>
  );
}

export default ImageDisplay;