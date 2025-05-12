import React, { useState } from 'react';
import '../styles/Projects.scss';

import pendingImg from '../assets/blueprints.jpg';
import consultingImg from '../assets/handshake.jpg';

const Projects: React.FC = () => {
  const [activeContent, setActiveContent] = useState<null | 'patents' | 'consulting'>(null);

  const contentMap = {
    patents: {
      title: 'Patent Portfolio',
      description: [
        'Innovation for Medical Devices including a rotatable shaft to allow for optimal control.',
        'Invention to prevent concussions in high-impact sports through dynamic neck support.',
        'Invention to strengthen and rehabilitate wrists for racket-sport athletes.',
      ],
    },
    consulting: {
      title: 'Consulting',
      description: [
        ['Ticket Entry Automation for Tickets For Kids.', 'https://drive.google.com/file/d/1G7Z_0lVMd2cwqQlT7TZhJp6dk4mZ8lSG/view?usp=sharing'],
        ['Advanced Player Archetype Scouting tool for NCAA coaching clients.', 'https://github.com/SchwandersC/NCAA_Advanced_Archetypes'],
      ] as [string, string][],
    },
  };

  const images = {
    patents: pendingImg,
    consulting: consultingImg,
  };

  const closeModal = () => setActiveContent(null);
  const active = activeContent ? contentMap[activeContent] : null;

  return (
    <section id="projects" className="projects-section">
      <h2>Our Work</h2>
      <div className="block-container">
        {(['patents', 'consulting'] as const).map((key) => (
          <div
            key={key}
            className="info-block with-image"
            style={{ backgroundImage: `url(${images[key]})` }}
            onClick={() => setActiveContent(key)}
          >
            <div className="info-text-blur">{contentMap[key].title}</div>
          </div>
        ))}
      </div>

      {active && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h3>{active.title}</h3>
            <div className="modal-scroll-content">
              <ul>
                {active.title === 'Consulting'
                  ? (active.description as [string, string][]).map(([text, url], i) => (
                      <li key={i}>
                        <a href={url} target="_blank" rel="noreferrer">{text}</a>
                      </li>
                    ))
                  : (active.description as string[]).map((text, i) => <li key={i}>{text}</li>)
                }
              </ul>

              <div className="modal-cta">
                <p>Curious about what other projects we're working on?</p>
                <button
                  className="cta-button"
                  onClick={() => {
                    closeModal();
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
