
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/hero-journey.jpg';

function Home() {
  const [userAnswer, setUserAnswer] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!userAnswer.trim()) {
      setError('Please share your thoughts before submitting.');
      return;
    }

    setIsLoading(true);
    setError('');
    setAiResponse('');
    setShowNext(false);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY || process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `You are a compassionate Christian apologist representing a Gospel website. Your role is to:

1. Warmly acknowledge and affirm the user's honest reflection
2. Ask thoughtful, gentle questions that reveal potential gaps or limitations in their perspective
3. Help them see what might be missing without being dismissive:
   - What happens when this purpose fails or is taken away?
   - Does this answer the "why" behind existence itself?
   - What about suffering, death, or ultimate meaning?
4. Create curiosity about a deeper, more complete answer
5. Point to the fact that throughout history, humanity has searched for this answer
6. Be conversational, humble, and gracious - never condescending
7. Keep responses concise (3-4 paragraphs)
8. End by inviting them to explore the biblical perspective that addresses these deeper questions

DO NOT give away the full biblical answer. Instead, prepare their hearts to receive it by helping them see the need for something more complete and eternal.

Website Content Context:
**Purpose of Life:**
- Philosophy (Aristotle: virtue/good life; Existentialists: create your own meaning; Humanism: human flourishing)
- Religion (Buddhism: escape suffering/Nirvana; Hinduism: dharma/moksha; Islam: submit to Allah/paradise)
- Modern culture: follow dreams, success, legacy
- Biblical view: Created by God in His image for relationship with Him, to reflect His glory, fulfill a mission (Genesis 1:26-28, Isaiah 43:7, Matthew 22:36-38)

**Good and Evil:**
- God's nature defines good; evil is corruption of good
- Conscience and revelation reveal morality
- The Fall brought sin and death (Genesis 3, Romans 5:12)
- God will judge the world but offers mercy through Jesus

**The Gospel:**
- Adam's sin: our problem (Fall, human nature, separation from God)
- Jesus' sacrifice: God's solution (Incarnation, atoning death, resurrection)
- Saved by grace through faith: our response (Ephesians 2:8-9, Romans 10:9-10)
- Eternal hope: New Heaven and Earth (Revelation 21:1-5)

Your goal: Help them realize their answer, while valuable, may not fully address life's deepest questions. Create openness to explore the complete picture.`
            },
            {
              role: 'user',
              content: `A person shared this about life's purpose: "${userAnswer}"\n\nRespond with warmth and wisdom, acknowledging their perspective while introducing biblical truth.`
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setAiResponse(data.choices[0].message.content);
      setShowNext(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    navigate('/purpose');
  };

  return (
    <div className="home-page">
      {/* Hero Section with Image */}
      <div className="hero-section">
        <div className="hero-image-container">
          <img 
            src={heroImage}
            alt="Journey to finding purpose"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to Purpose Of Life
            </h1>
            <p className="hero-subtitle">
              Discover the timeless message of hope, redemption, and eternal life through Jesus Christ
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Question Section */}
      <div className="container">
        <div className="question-card">
          {/* Question Header */}
          <div className="question-header">
            <div className="question-icon">🤔</div>
            <h2 className="question-title">A Moment to Reflect</h2>
            <p className="question-subtitle">
              Before we explore together, we'd love to hear your perspective
            </p>
          </div>

          <div className="question-content">
            <h1 className="main-question" style={{ textAlign: 'center', color: 'tomato', fontSize: '2rem' }}>
              What is the purpose of life, according to you?
            </h1>
            
            {/* Answer Form */}
            {!aiResponse && (
              <form onSubmit={handleSubmit} className="answer-form">
                <textarea
                  className="answer-textarea"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Share your thoughts... There are no wrong answers, just honest reflections."
                  rows="6"
                  disabled={isLoading}
                />
                
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Reflecting...
                    </>
                  ) : (
                    'Submit Reflection'
                  )}
                </button>
              </form>
            )}

            {/* AI Response Section */}
            {aiResponse && (
              <div className="ai-response-section">
                <div className="user-answer-display">
                  <h4 className="response-label">Your Reflection:</h4>
                  <p className="user-answer-text">{userAnswer}</p>
                </div>

                <div className="ai-response">
                  <div className="response-header">
                    <span className="response-icon">💭</span>
                    <h4 className="response-label">Kitso's Perspective:</h4>
                  </div>
                  <div className="response-text">
                    {aiResponse}
                  </div>
                </div>

                {showNext && (
                  <div className="next-section">
                    <p className="next-prompt">
                      Ready to explore this further?
                    </p>
                    <button onClick={handleNext} className="next-button">
                      Continue to Purpose of Life
                      <span className="next-arrow">→</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;