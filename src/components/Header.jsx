import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">✝</span>
          <span className="logo-text">Purpose Of Life</span>
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/purpose" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Purpose
          </Link>
          <Link 
            to="/good-evil" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Good & Evil
          </Link>
          <Link 
            to="/gospel" 
            className="nav-link featured"
            onClick={() => setIsMenuOpen(false)}
          >
            Good News
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;