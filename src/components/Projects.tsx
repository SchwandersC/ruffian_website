import React, { useEffect, useState } from "react";
import "../styles/Projects.scss";
import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data/projects";

const AUTO_ROTATE_MS = 6500;

const Projects: React.FC = () => {
  const projects: Project[] = PROJECTS;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Safety: if projects array ever changes length, keep index valid
  useEffect(() => {
    if (index >= projects.length) setIndex(0);
  }, [index, projects.length]);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    if (paused || projects.length <= 1) return;
    const t = window.setInterval(next, AUTO_ROTATE_MS);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, projects.length]);

  if (!projects.length) return null;

  const active = projects[index];

  return (
    <section id="projects" className="projects-section">
      <h2>Our Latest Projects</h2>

      <div
        className="projects-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          className="carousel-btn left"
          onClick={prev}
          aria-label="Previous project"
          type="button"
        >
          ‹
        </button>

        <div
          className="carousel-window"
          style={{
            backgroundImage: active.image ? `url(${active.image})` : undefined,
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects carousel"
        >
          <div className="carousel-overlay">
            <div className="carousel-card">
              <h3>{active.title}</h3>
              <p>{active.shortDescription}</p>

              <div className="carousel-cta">
                <Link className="cta-button" to={`/projects/${active.slug}`}>
                  Click to Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-btn right"
          onClick={next}
          aria-label="Next project"
          type="button"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots" aria-label="Carousel pagination">
        {projects.map((p, i) => (
          <button
            key={p.slug}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${p.title}`}
            aria-current={i === index ? "true" : "false"}
            type="button"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
