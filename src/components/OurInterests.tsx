import React from 'react';
import '../styles/OurInterests.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faRobot, faFutbol, faTools } from '@fortawesome/free-solid-svg-icons';

const interests = [
  {
    title: 'Biomedical Innovation',
    desc: 'Our team combines a wealth of experience in the biomedical industry, actively solving some of the biggest problems in medicine and biological processes.',
    icon: faMicroscope,
  },
  {
    title: 'AI & Process Automation',
    desc: "We build smarter pipelines—from automated data analysis to advanced ML models, we'll get the most out of your data and processes.",
    icon: faRobot,
  },
  {
    title: 'Sports Tech',
    desc: (
      <>
        We have collaborated across the broad spectrum of sports business, creating{' '}
        <a href="https://github.com/SchwandersC/NCAA_Advanced_Archetypes" target="_blank" rel="noopener noreferrer">
          advanced scouting solutions for NCAA coaches
        </a>, helping a{' '}
        <a href="https://www.momentumbets.com/" target="_blank" rel="noopener noreferrer">
          sports gaming startup scale operations
        </a>, and even developing our own next-gen sports equipment for injury prevention.
      </>
    ),
    icon: faFutbol,
  },
  {
    title: 'Rapid Prototyping',
    desc: (
      <>
        We move fast and can take your idea to prototype in lightning speed.
        <div className="cta-wrapper">
          <button
            className="cta-button"
            onClick={() => {
              const section = document.getElementById('projects');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Our Work
          </button>
        </div>
      </>
    ),
    icon: faTools,
  },
];

const OurInterests: React.FC = () => (
  <section id="interests" className="interests-section">
    <h1 className="interests-heading">Our Interests</h1>
    <p className="subheading">We work across disciplines — from biotech to sports equipment to AI automation.</p>

    <div className="interests-grid">
      {interests.map((item, idx) => (
        <div className="interest-text-block" key={idx}>
          <h3>
            <FontAwesomeIcon icon={item.icon} className="interest-icon" />
            {item.title}
          </h3>
          <hr />
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OurInterests;
