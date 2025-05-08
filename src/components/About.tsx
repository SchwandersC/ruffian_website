import React, { useState, useEffect } from 'react';
import '../styles/About.scss';
import project1 from '../assets/ruffian_logo.png';
import project2 from '../assets/hero-image.png';
import project3 from '../assets/hero-image.png';

const projectSlides = [
  {
    src: project1,
    alt: 'Accelerating Bioengineering',
    title: 'Accelerating Bioengineering',
    description:
      'Helping teams bridge the gap between prototypes and patient-ready solutions through simulation, data pipelines, and agile development.',
  },
  {
    src: project2,
    alt: 'Smart Industrial Systems',
    title: 'Smart Industrial Systems',
    description:
      'We optimize manufacturing and operations through digital twin modeling, constraint-aware design, and custom tooling.',
  },
  {
    src: project3,
    alt: 'Trustworthy AI',
    title: 'Trustworthy AI',
    description:
      'From interpretable models to infrastructure for reproducibility, we make ML systems robust, scalable, and decision-ready.',
  },
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + projectSlides.length) % projectSlides.length
    );
  };

  const handleOpenModal = () => {
    setActiveModalIndex(currentIndex);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveModalIndex(null);
  };

  useEffect(() => {
    if (modalOpen) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [modalOpen]);

  const current = projectSlides[currentIndex];
  const modalSlide = activeModalIndex !== null ? projectSlides[activeModalIndex] : null;

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>ABOUT RUFFIAN</h1>
      </div>

      <div className="about-grid">
        <div>
          <h2 className="section-label">Who Are We?</h2>
          <p>
            We're <strong>Ruffian</strong> — a scrappy, hands-on team of engineers who don’t just consult —
            we <span className="highlight-verb">build</span>. We design, prototype, and launch our own
            products, and bring that same builder mindset to the companies we work with.
          </p>
        </div>

        <div>
          <h2 className="section-label">What Do We Do?</h2>
          <p>
            We split our time between developing our own <strong>innovations</strong> and partnering
            with teams to solve technical problems and bring new ideas to life. Whether it’s your product
            or ours, we bring <span className="highlight-verb">hustle</span>, <span className="highlight-verb">precision</span>,
            and <span className="highlight-verb">practicality</span> to the table.
          </p>
        </div>

        <div className="project-carousel">
          <h2 className="section-label">Problems We Solve</h2>
          <div className="carousel-wrapper">
            <button className="carousel-btn" onClick={handlePrev}>{'<'}</button>
            <div className="carousel-img-link" onClick={handleOpenModal}>
              <img src={current.src} alt={current.alt} />
              <h3>{current.title}</h3>
            </div>
            <button className="carousel-btn" onClick={handleNext}>{'>'}</button>
          </div>
        </div>
      </div>

      {modalOpen && modalSlide && (
        <div className="project-modal-overlay" onClick={handleCloseModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>×</button>
            <img src={modalSlide.src} alt={modalSlide.alt} />
            <h3>{modalSlide.title}</h3>
            <p>{modalSlide.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
