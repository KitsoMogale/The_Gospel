import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PurposeOfLife from './pages/PurposeOfLife';
import { theme } from './styles/theme';
import './App.css';
import GoodAndEvil from './pages/GoodAndEvil';
import Gospel from './pages/Gospel';
import Prayer from './pages/Prayer';

function App() {
  return (
    <Router>
      <div className="app" style={{ backgroundColor: theme.colors.background }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/purpose" element={<PurposeOfLife />} />
            <Route path="/good-evil" element={<GoodAndEvil />} />
            <Route path="/gospel" element={<Gospel />} />
            <Route path="/prayer" element={<Prayer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
