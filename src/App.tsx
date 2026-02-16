import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

import "./styles/App.scss";
import "./styles/Navbar.scss";
import Logo from "./assets/Ruffian_cropped_logo_2.png";


// GLOBAL scroll-to-top handler
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // use "auto" if TS complains
    });
  }, [pathname]);

  return null;
}


const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">

      {/* This fixes scroll position when navigating between routes */}
      <ScrollToTop />

      <nav className={`app-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={Logo} alt="Ruffian logo" />
          </Link>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/#main" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="/#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="/#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="/#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>


      <Routes>

        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Individual project pages */}
        <Route path="/projects/:slug" element={<ProjectPage />} />

      </Routes>

    </div>
  );
};

export default App;
