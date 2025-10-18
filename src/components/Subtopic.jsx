
import ImageDisplay from './ImageDisplay';
import AudioPlayer from './AudioPlayer';
import { theme } from '../styles/Theme';

function Subtopic({ title, intro, sections, image, audio }) {
  const renderSection = (section, index) => {
    switch (section.type) {
      case 'heading':
        return (
          <h3 key={index} style={{
            fontSize: '1.4rem',
            color: theme.colors.primary,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
            fontFamily: theme.fonts.family.heading,
          }}>
            {section.content}
          </h3>
        );
      
      case 'subheading':
        return (
          <h4 key={index} style={{
            fontSize: '1.2rem',
            color: theme.colors.secondary,
            marginTop: '1.25rem',
            marginBottom: '0.5rem',
            fontFamily: theme.fonts.family.heading,
          }}>
            {section.content}
          </h4>
        );
      
      case 'paragraph':
        return (
          <p key={index} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: theme.colors.text,
            marginBottom: '1rem',
          }}>
            {section.content}
          </p>
        );
      
      case 'verse':
        return (
          <blockquote key={index} style={{
            background: 'linear-gradient(135deg, #f0f9f0 0%, #e8f5e9 100%)',
            borderLeft: `4px solid ${theme.colors.primary}`,
            padding: '1.25rem 1.5rem',
            margin: '1.5rem 0',
            borderRadius: '4px',
            fontStyle: 'italic',
          }}>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              color: theme.colors.text,
              margin: '0 0 0.5rem 0',
            }}>
              "{section.text}"
            </p>
            <cite style={{
              fontSize: '0.95rem',
              color: theme.colors.primary,
              fontWeight: '600',
              fontStyle: 'normal',
            }}>
              — {section.reference}
            </cite>
          </blockquote>
        );
      
      case 'bullets':
        return (
          <ul key={index} style={{
            listStyle: 'none',
            padding: 0,
            margin: '1rem 0',
          }}>
            {section.items.map((item, i) => (
              <li key={i} style={{
                paddingLeft: '1.5rem',
                marginBottom: '0.75rem',
                position: 'relative',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                color: theme.colors.text,
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: theme.colors.primary,
                  fontWeight: 'bold',
                }}>
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        );
      
      case 'reflection':
        return (
          <div key={index} style={{
            background: '#fff8e1',
            borderLeft: `4px solid ${theme.colors.accent}`,
            padding: '1rem 1.25rem',
            margin: '1.25rem 0',
            borderRadius: '4px',
            fontSize: '1rem',
            lineHeight: '1.7',
            color: theme.colors.textLight,
            fontStyle: 'italic',
          }}>
            {section.content}
          </div>
        );
      
      case 'callout':
        return (
          <div key={index} style={{
            background: `linear-gradient(135deg, ${theme.colors.secondary}15 0%, ${theme.colors.primary}15 100%)`,
            border: `2px solid ${theme.colors.primary}`,
            padding: '1.5rem',
            margin: '1.5rem 0',
            borderRadius: '8px',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: theme.colors.text,
            fontWeight: '500',
          }}>
            {section.content}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="card subtopic">
      <div className="subtopic-content">
        <h2 className="subtopic-title">{title}</h2>
        
        {intro && (
          <p style={{
            fontSize: '1.15rem',
            lineHeight: '1.8',
            color: theme.colors.textLight,
            marginBottom: '1.5rem',
            fontWeight: '500',
          }}>
            {intro}
          </p>
        )}
        
        <div style={{ marginTop: '1rem' }}>
          {sections && sections.map((section, index) => renderSection(section, index))}
        </div>
        
        {audio && <AudioPlayer src={audio} />}
      </div>
      
      {image && <ImageDisplay src={image} alt={title} />}
    </div>
  );
}

export default Subtopic;