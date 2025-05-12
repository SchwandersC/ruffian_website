import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import Logo from '../assets/ruffian_logo_1.png';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`app-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <a href="#main">
          <img src={Logo} alt="Ruffian logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#main">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#description">Description</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
