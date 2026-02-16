import React, { useState, useEffect } from 'react';
import '../styles/About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import valuesImage from '../assets/dawn-landscape-mountains.jpg';
import charlieHead from '../assets/charlie_head.jpg';
import jackFace from '../assets/jack_face.jpg';
import shannonFace from '../assets/shannon_face.jpg';
import laraFace from '../assets/lara_face.jpg';
import samFace from '../assets/sam_face.jpg';
import victoriaFace from '../assets/victoria_face.jpg';
import lukeFace from '../assets/luke_face.jpg';
import lewisFace from '../assets/lewis_face.jpg';

const teamMembers = [
  {
    name: 'Lewis Holmberg',
    email: 'lewis.holmberg@ruffian.net',
    linkedin: 'https://www.linkedin.com/in/lewis-holmberg-a972701bb',
    image: lewisFace,
    role: 'Founder, CEO',
  },
  {
    name: 'Lara Herlah',
    email: 'lara.herlah@ruffian.net',
    linkedin: 'https://www.linkedin.com/in/lara-herlah',
    image: laraFace,
    role: 'COO',
  },
  {
    name: 'Jack Walde',
    email: 'jack.walde@ruffian.net',
    linkedin: 'https://www.linkedin.com/in/jack-walde',
    image: jackFace,
    role: 'CSMO',
  },
  {
    name: 'Charlie Neuenschwander',
    email: 'caneuenschwander@gmail.com',
    linkedin: 'https://www.linkedin.com/in/charlie-neuen',
    image: charlieHead,
    role: 'President',
  }

];




const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showMissionModal, setShowMissionModal] = useState(false);



  const handleOpenModal = () => {
    setActiveModalIndex(currentIndex);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveModalIndex(null);
  };

  

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>ABOUT RUFFIAN</h1>
      </div>

      <div className="about-grid">
        <div>
          <h2 className="section-label">Who Are We?</h2>
          <p>
           We're <strong>Ruffian</strong> — An applied research and development group focused on discovering
           and developing high-impact product opportunities in biomedicine and sports to improve lives.

          </p>
          <div className="cta-wrapper">
            <button className="cta-button" onClick={() => setShowTeamModal(true)}>
              Meet Our Executive Team
            </button>
          </div>
        </div>

        <div>
          <h2 className="section-label">What Do We Do?</h2>
          <p>
          Our team combines engineering and business expertise to rigorously evaluate 
          opportunities, and efficiently move from idea to product through fast, focused iteration.

          </p>
          <div className="cta-wrapper">
            <button
              className="cta-button"
              onClick={() => {
                const section = document.getElementById('projects');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Our Work
            </button>
          </div>
        </div>

        <div>
          {/* Replacing "Why Us?" with image card */}
          <div className="values-card" onClick={() => setShowMissionModal(true)}>
            <div className="values-image" style={{ backgroundImage: `url(${valuesImage})` }}>
              <div className="values-text-overlay">Our Values</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Modal */}
      {showTeamModal && (
        <div className="project-modal-overlay" onClick={() => setShowTeamModal(false)}>
          <div className="project-modal team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowTeamModal(false)}>×</button>
            <h3>Meet the Team</h3>
            <div className="team-list">
              {teamMembers.map((member, i) => (
                <div className="team-member" key={i}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="avatar-placeholder">{member.name.charAt(0)}</div>
                  )}
                  <div>
                    <strong>{member.name}</strong>
                    <p>{member.role}</p>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin-icon"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Our Values Modal */}
      {showMissionModal && (
        <div className="project-modal-overlay" onClick={() => setShowMissionModal(false)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowMissionModal(false)}>×</button>
            <h3>Our Values</h3>
            <p>
            We exist to turn ambitious ideas into products that create meaningful impact. 
            </p>
            <p>
            We believe that creative thinking, paired with disciplined evaluation and execution, can lead to products that improve and save lives.
            </p>
            <p>
            At the core of who we are is creative thinking. We take the creative act seriously, approaching each product with intention and commitment to providing the greatest good we can to the world.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
