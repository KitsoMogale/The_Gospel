import { useState, useRef, useEffect } from 'react';

function FloatingChat({ contentContext, pageTitle, isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

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
              content: `You are a knowledgeable and compassionate Bible teacher helping someone understand the Gospel. You're answering questions about the "${pageTitle}" section of a Christian website.

Context from the current page:
${contentContext}

Guidelines:
1. Answer questions directly and clearly
2. Reference specific content from the page when relevant
3. If asked about something not on this page, briefly answer and point to related content
4. Use Scripture references when appropriate
5. Be warm, patient, and encouraging
6. Keep responses concise (2-3 paragraphs max)
7. If unsure, admit it and suggest exploring further

Website's full content:

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


Always maintain a biblical perspective while being respectful and kind.`
            },
            ...messages,
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 400
        })
      });

      const data = await response.json();
      const aiMessage = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          className="floating-chat-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <span className="chat-icon">💬</span>
          <span className="chat-badge">Ask Kitso</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="floating-chat-window">
          <div className="chat-header">
            <div className="chat-header-content">
              <span className="chat-header-icon">💭</span>
              <div>
                <h3 className="chat-header-title">Questions?</h3>
                <p className="chat-header-subtitle">Ask about {pageTitle}</p>
              </div>
            </div>
            <button 
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-welcome">
                <p>👋 Hi! I'm here to help you understand this content better.</p>
                <p>Ask Kitso anything about {pageTitle}!</p>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message chat-message-${msg.role}`}>
                <div className="chat-message-content">
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="chat-message chat-message-assistant">
                <div className="chat-message-content">
                  <span className="typing-indicator">
                    <span></span><span></span><span></span>
                  </span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chat-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              className="chat-input"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="chat-send-btn"
              disabled={isLoading || !inputValue.trim()}
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default FloatingChat;
