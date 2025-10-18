import { theme } from '../styles/Theme';

function Footer() {
  return (
    <footer style={{ backgroundColor: theme.colors.secondary, padding: theme.spacing.small, textAlign: 'center', color: 'white' }}>
      <p>&copy; 2025 Gospel of Christ Site. All rights reserved.</p>
      {/* Future: Add AI chat button here */}
    </footer>
  );
}

export default Footer;