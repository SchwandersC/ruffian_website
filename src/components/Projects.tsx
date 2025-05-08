import React, { useState } from 'react';
import '../styles/Projects.scss';

const Projects: React.FC = () => {
  const [activeContent, setActiveContent] = useState<null | 'patents' | 'published' | 'consulting'>(null);

  const contentMap = {
    patents: {
      title: 'Patents Pending',
      description: 'We can’t share all of what we are building, but here is a sneak peek.',
    },
    published: {
      title: 'Patents Published',
      description: 'Explore our publicly available patents and innovations shaping the future.',
    },
    consulting: {
      title: 'Consulting',
      description: 'We have even more in the works that we can’t wait to share with you soon!',
    },
  };

  const closeModal = () => setActiveContent(null);

  const active = activeContent ? contentMap[activeContent] : null;

  return (
    <section id="projects" className="projects-section">
      <h2>Our Work</h2>
      <div className="block-container">
        <div className="info-block" onClick={() => setActiveContent('published')}>
          Patents Published
        </div>
        <div className="info-block" onClick={() => setActiveContent('patents')}>
          Patents Pending
        </div>
        <div className="info-block" onClick={() => setActiveContent('consulting')}>
          Consulting
        </div>
      </div>

      {active && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
