import ImageDisplay from './ImageDisplay';
import AudioPlayer from './AudioPlayer';
import { theme } from '../styles/Theme';

function Subtopic({ title, intro, sections, image, audio }) {
  const renderSection = (section, index) => {
    switch (section.type) {
      case 'heading':
        return (
          <h3 key={index} className="subtopic-heading">
            {section.content}
          </h3>
        );
      
      case 'subheading':
        return (
          <h4 key={index} className="subtopic-subheading">
            {section.content}
          </h4>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="subtopic-paragraph">
            {section.content}
          </p>
        );
      
      case 'verse':
        return (
          <blockquote key={index} className="subtopic-verse">
            <p className="verse-text">
              "{section.text}"
            </p>
            <cite className="verse-reference">
              — {section.reference}
            </cite>
          </blockquote>
        );
      
      case 'bullets':
        return (
          <ul key={index} className="subtopic-bullets">
            {section.items.map((item, i) => (
              <li key={i} className="bullet-item">
                <span className="bullet-marker">•</span>
                {item}
              </li>
            ))}
          </ul>
        );
      
      case 'reflection':
        return (
          <div key={index} className="subtopic-reflection">
            {section.content}
          </div>
        );
      
      case 'callout':
        return (
          <div key={index} className="subtopic-callout">
            {section.content}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="card subtopic">
      <div className="subtopic-wrapper">
        {/* Image - positioned for mobile float */}
        {image && (
          <div className="subtopic-image-wrapper">
            <ImageDisplay src={image} alt={title} />
          </div>
        )}
        
        {/* Content */}
        <div className="subtopic-content">
          <h2 className="subtopic-title">{title}</h2>
          
          {intro && (
            <p className="subtopic-intro">
              {intro}
            </p>
          )}
          
          <div className="subtopic-sections">
            {sections && sections.map((section, index) => renderSection(section, index))}
          </div>
          
          {audio && <AudioPlayer src={audio} />}
        </div>
      </div>
    </div>
  );
}

export default Subtopic;