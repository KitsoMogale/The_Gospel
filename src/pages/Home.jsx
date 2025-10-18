import { Link } from 'react-router-dom';
import { theme } from '../styles/Theme';

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
      title: 'The Gospel', 
      path: '/gospel',
      desc: 'The good news that changes everything.',
      icon: '✝️'
    },
  ];

  return (
    <div className="container">
      <div className="section-header">
        <h1 style={{ fontSize: '3.5rem', color: theme.colors.primary }}>
          Welcome to Gospel Truth
        </h1>
        <p className="section-intro" style={{ fontSize: '1.3rem' }}>
          Discover the timeless message of hope, redemption, and eternal life through Jesus Christ.
        </p>
      </div>

      <div className="card-grid">
        {cards.map(card => (
          <Link key={card.path} to={card.path} className="card home-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {card.icon}
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              color: theme.colors.primary,
              marginBottom: '0.5rem',
            }}>
              {card.title}
            </h3>
            <p style={{ color: theme.colors.textLight }}>
              {card.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;