import React, { useState, useEffect } from 'react';
import '../styles/About.scss';

const projectImages = [
  { src: '/images/project1.jpg', alt: 'Project 1', link: '/projects#1' },
  { src: '/images/project2.jpg', alt: 'Project 2', link: '/projects#2' },
  { src: '/images/project3.jpg', alt: 'Project 3', link: '/projects#3' },
];

const About: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prev) =>
      (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>ABOUT RUFFIAN</h1>
      </div>

      <div className="about-grid">
        <div>
          <h2 className="section-label">Who Are We?</h2>
          <p>
            We're <strong>Ruffian</strong> — a scrappy, hands-on team of engineers who don’t just consult — we
            <span className="highlight-verb"> build</span>. We design, prototype, and launch our own products, and bring that same builder mindset to the companies we work with.
          </p>
        </div>

        <div>
          <h2 className="section-label">What Do We Do?</h2>
          <p>
            We split our time between developing our own <strong>innovations</strong> and partnering with teams to solve technical problems and bring new ideas to life. Whether it’s your product or ours, we bring
            <span className="highlight-verb"> hustle</span>, <span className="highlight-verb"> precision</span>, and <span className="highlight-verb">practicality</span> to the table.
          </p>
        </div>

        <div className="project-carousel">
          <h2 className="section-label">Our Projects</h2>
          <div className="carousel-wrapper">
            <button className="carousel-btn" onClick={handlePrev}>{'<'}</button>
            <a
              href={projectImages[currentProjectIndex].link}
              className="carousel-img-link"
            >
              <img
                src={projectImages[currentProjectIndex].src}
                alt={projectImages[currentProjectIndex].alt}
              />
            </a>
            <button className="carousel-btn" onClick={handleNext}>{'>'}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
