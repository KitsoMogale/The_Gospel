import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Subtopic from './Subtopic';
import AudioPlayer from './AudioPlayer';
import FloatingChat from './FloatingChat';

function Section({ title, subtopics, intro, audioFiles }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Define the navigation order
  const navOrder = [
    { path: '/', label: 'Home' },
    { path: '/purpose', label: 'Purpose of Life' },
    { path: '/good-evil', label: 'Good & Evil' },
    { path: '/gospel', label: 'The Gospel' }
  ];

  // Find current page index
  const currentIndex = navOrder.findIndex(page => page.path === location.pathname);
  
  // Determine previous and next pages
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < navOrder.length - 1;
  const previousPage = hasPrevious ? navOrder[currentIndex - 1] : null;
  const nextPage = hasNext ? navOrder[currentIndex + 1] : null;

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  // Get content context for AI
  const getContentContext = () => {
    let context = `Current Page: ${title}\n\n`;
    if (intro) context += `Introduction: ${intro}\n\n`;
    
    subtopics.forEach((subtopic, index) => {
      context += `\nSection ${index + 1}: ${subtopic.title}\n`;
      if (subtopic.intro) context += `${subtopic.intro}\n`;
      
      if (subtopic.sections) {
        subtopic.sections.forEach(section => {
          if (section.type === 'paragraph') context += `${section.content}\n`;
          if (section.type === 'verse') context += `"${section.text}" - ${section.reference}\n`;
          if (section.type === 'heading') context += `\n${section.content}\n`;
        });
      }
    });
    
    return context;
  };

  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">{title}</h1>
        {intro && <p className="section-intro">{intro}</p>}
      </div>

      {/* Audio Player */}
      {audioFiles && audioFiles.length > 0 && (
        <AudioPlayer audioFiles={audioFiles} title={title} />
      )}
      
      <div>
        {subtopics.map((sub, index) => (
          <Subtopic key={index} {...sub} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="section-navigation">
        {hasPrevious && (
          <button 
            onClick={() => handleNavigation(previousPage.path)}
            className="nav-button nav-button-prev"
          >
            <span className="nav-arrow">←</span>
            <div className="nav-button-content">
              <span className="nav-button-label">Previous</span>
              <span className="nav-button-title">{previousPage.label}</span>
            </div>
          </button>
        )}
        
        {hasNext && (
          <button 
            onClick={() => handleNavigation(nextPage.path)}
            className="nav-button nav-button-next"
          >
            <div className="nav-button-content">
              <span className="nav-button-label">Next</span>
              <span className="nav-button-title">{nextPage.label}</span>
            </div>
            <span className="nav-arrow">→</span>
          </button>
        )}
      </div>

      {/* Floating Chat Button */}
      <FloatingChat 
        contentContext={getContentContext()}
        pageTitle={title}
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
      />
    </section>
  );
}

export default Section;