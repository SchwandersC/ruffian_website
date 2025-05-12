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

    <div className="program-badge">
      <a
        href="https://www.mcgill.ca/dobson/entrepreneurship-programs/entrepreneurial-women-lean-startup"
        target="_blank"
        rel="noopener noreferrer"
      >
        Participant in the Entrepreneurial Women Lean Startup Accelerator
      </a>
    </div>
  </section>
);

export default Main;
