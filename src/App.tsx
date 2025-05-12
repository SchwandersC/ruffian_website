import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import About from './components/About';
import Description from './components/Description';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import OurInterests from './components/OurInterests';
import './styles/App.scss';
import './styles/Navbar.scss';
import Logo from './assets/Ruffian_cropped_logo_2.png'; //home/schwandersc/workspace/ruffian_website/src/assets/Ruffian Logos 5.8.25-11.PNG

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className={`app-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <a href="#main">
            <img src={Logo} alt="Ruffian logo" />
          </a>
        </div>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#main" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

        </ul>
      </nav>

      <Main />
      <About />
      <OurInterests />
      <Description />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
