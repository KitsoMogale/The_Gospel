import { Link } from 'react-router-dom';
import { theme } from '../styles/Theme';

function Header() {
  return (
    <header style={{
      background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
      padding: '1.5rem 2rem',
      boxShadow: theme.shadows.small,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.75rem',
          fontFamily: theme.fonts.family.heading,
          fontWeight: 'bold',
        }}>
          Gospel Truth
        </Link>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/purpose" className="nav-link">Purpose</Link>
          <Link to="/good-evil" className="nav-link">Good & Evil</Link>
          <Link to="/gospel" className="nav-link">Gospel</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;