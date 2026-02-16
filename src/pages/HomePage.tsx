import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
