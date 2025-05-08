import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span>© {new Date().getFullYear()} Ruffian LLC. All rights reserved.</span>
        </div>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
