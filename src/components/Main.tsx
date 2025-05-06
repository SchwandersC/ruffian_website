import React from 'react';
import '../styles/Main.scss';

const Main: React.FC = () => (
  <section id="main" className="main-section">
    <div className="main-content">
      <div className="main-text">
        <p>Engineering solutions that leave the field behind</p>
        <p className="subheading">Ready to pull ahead?</p>
        <div className="main-cta-buttons">
          <a href="#about" className="btn learn-more">Learn More</a>
          <a href="#contact" className="btn contact-us">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
);

export default Main;
