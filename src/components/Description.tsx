import React from 'react';
import '../styles/Description.scss';

const Description: React.FC = () => (
  <section id="description" className="description-section">
    <h2>Why Choose Us?</h2>

    <div className="description-grid">
      <div className="description-box">
        <h3>Problems We Solve</h3>
        <ul>
          <li>Have an idea but don’t know how to implement it?</li>
          <li>Want actual prototypes, not justpresentations?</li>
          <li>Have a bunch of data but not sure how to use it?</li>
          <li>Manual processes that you'd like to automate?</li>
          <li>Hit a technical wall and need clarity?</li>
        </ul>
      </div>

      <div className="description-box">
        <h3>Our Expertise</h3>
        <ul>
          <li>Medical Devices</li>
          <li>Rapid Prototyping (Hardware & Software)</li>
          <li>End-to-End Pipeline Design</li>
          <li>Biomedical Engineering</li>
          <li>Research and Experimental Design</li>
          <li>Automation & Process Optimization</li>
        </ul>
      </div>
    </div>
    <p className="description-tagline">
    Above all else, we bring a spirit of <strong>invention</strong> that no other group of engineers can match.
  </p>

  <div className="cta-wrapper" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
    <button
      className="cta-button"
      onClick={() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Contact Us
    </button>
  </div>
</section>
);

export default Description;
