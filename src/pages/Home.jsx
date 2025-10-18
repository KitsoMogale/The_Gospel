import { Link } from 'react-router-dom';
import { theme } from '../styles/Theme';
import heroImage from '../assets/images/hero-journey.jpg'; // Update path as needed

function Home() {
  const cards = [
    { 
      title: 'Purpose of Life', 
      path: '/purpose',
      desc: 'Why are we here? Discover God\'s design for your life.',
      icon: '🎯'
    },
    { 
      title: 'Good & Evil', 
      path: '/good-evil',
      desc: 'Understanding the battle and God\'s solution.',
      icon: '⚖️'
    },
    { 
      title: 'The Good News', 
      path: '/gospel',
      desc: 'The good news that changes everything.',
      icon: '✝️'
    },
  ];

  return (
    <div style={{ width: '100%' }}>
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
              Welcome to FindingPurpose
            </h1>
            <p className="hero-subtitle">
              Discover the timeless message of hope, redemption, and eternal life through Jesus Christ
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="card-grid">
          {cards.map(card => (
            <Link key={card.path} to={card.path} className="card home-card">
              <div className="card-icon">
                {card.icon}
              </div>
              <h3 className="card-title">
                {card.title}
              </h3>
              <p className="card-description">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;