import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">✝</span>
              <span className="footer-logo-text">Purpose Of Life</span>
            </div>
            <p className="footer-tagline">
              Discovering truth, hope, and eternal purpose through the Gospel of Jesus Christ
            </p>
          </div>

          <div className="footer-links-grid">
            {/* Navigation Links */}
            <div className="footer-section">
              <h4 className="footer-section-title">Explore</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/purpose" className="footer-link">Purpose of Life</Link></li>
                <li><Link to="/good-evil" className="footer-link">Good & Evil</Link></li>
                <li><Link to="/gospel" className="footer-link">The Gospel</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4 className="footer-section-title">Scripture</h4>
              <ul className="footer-links">
                <li className="footer-verse-item">
                  <span className="verse-quote">"For God so loved the world..."</span>
                  <span className="verse-ref">John 3:16</span>
                </li>
                <li className="footer-verse-item">
                  <span className="verse-quote">"I am the way, the truth, and the life"</span>
                  <span className="verse-ref">John 14:6</span>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-section">
              <h4 className="footer-section-title">Connect</h4>
              <p className="footer-description">
                Questions? Want to learn more about Jesus? We're here to help you on your journey.
              </p>
              <button className="footer-cta-button">
                Start a Conversation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Purpose Of Life. Sharing the hope of Christ.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-bottom-link">Terms</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-bottom-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;