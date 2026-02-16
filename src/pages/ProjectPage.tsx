import React from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import "../styles/ProjectPage.scss";

const ProjectPage: React.FC = () => {
  const { slug } = useParams();

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-page-layout">
        <main className="project-page">
          <h2>Project not found</h2>
          <Link to="/" className="cta-button" style={{ marginTop: "1rem" }}>
            ← Back home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="project-page-layout">
      {/* Sidebar Menu */}
      <aside className="project-sidebar">
        <h3 className="sidebar-title">Menu</h3>

        <nav className="project-nav" aria-label="Project navigation">
          <Link to="/" className="project-nav-item back-home-item">
            ← Back Home
          </Link>

          <div className="project-nav-divider" />

          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className={`project-nav-item ${p.slug === project.slug ? "active" : ""}`}
              aria-current={p.slug === project.slug ? "page" : undefined}
            >
              {p.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="project-page">
        <h1>{project.title}</h1>

        {project.image && (
          <div
            className="project-image"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        )}

        <p className="project-description">{project.longDescription}</p>

        {project.bullets?.length ? (
          <ul className="project-bullets">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}

        <div className="cta-container">
          <Link to="/#contact" className="cta-button">
            Want to find out more? → Contact us
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
