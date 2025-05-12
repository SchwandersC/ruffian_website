import React, { useState, useEffect } from 'react';
import '../styles/About.scss';
import project1 from '../assets/med_device.jpg';
import project2 from '../assets/ai_processes.jpg';
import project3 from '../assets/tennis_tech.jpg';
import valuesImage from '../assets/dawn-landscape-mountains.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const projectSlides = [
  {
    src: project1,
    alt: 'Bio Medical Product Development',
    title: 'Bio Medical Product Development',
    description:
      'We’ve designed products that provide cutting edge technology where it’s needed most. The spirit of innovation drives everything we do — and we’re just getting started.',
  },
  {
    src: project2,
    alt: 'Process Optimization',
    title: 'Process Optimization',
    description:
      'We don’t just make things faster—we make them smarter. From manufacturing to machine learning workflows, we’ve helped teams streamline operations, eliminate bottlenecks, and scale with confidence.',
  },
  {
    src: project3,
    alt: 'Sports Technology',
    title: 'Sports Technology',
    description:
      'What started as a love for the game turned into a playground for innovation. From NCAA scouting tools to sports safety products, we’re reshaping how athletes train and compete.',
  },
];

const teamMembers = [
  {
    name: 'Charlie Neuenschwander',
    email: 'charlie.neuenschwander@ruffian.net',
    linkedin: 'https://www.linkedin.com/in/charlie-neuen/',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHUX7XrKos4rw/profile-displayphoto-shrink_200_200/B56ZZ41MMaGoAg-/0/1745783932062?e=1752105600&v=beta&t=N1iLJugJNxH6hx8d_NJ5057mx80xCvO8KGeG6yNXu_s',
    role: 'ML/Process Engineer',
  },
  { name: 'Anna Arntsen', email: 'anna.arntsen@ruffian.net', linkedin: '', image: '', role: 'Developer' },
  { name: 'Grifyn Marcaccini', email: 'grifyn.marcaccini@ruffian.net', linkedin: '', image: '', role: 'Engineer' },
  { name: 'Jack Walde', email: 'jack.walde@ruffian.net', linkedin: '', image: '', role: 'Business' },
  { name: 'Lara Herlah', email: 'lara.herlah@ruffian.net', linkedin: '', image: '', role: 'Biomedical Engineer' },
  { name: 'Lewis Holmberg', email: 'lewis.holmberg@ruffian.net', linkedin: '', image: '', role: 'Founder, Lead Engineer' },
  { name: 'Sam Hanson', email: 'sam.hanson@ruffian.net', linkedin: '', image: '', role: 'Sales' },
  { name: 'Shannon Bussing', email: 'shannon.bussing@ruffian.net', linkedin: '', image: '', role: 'Chemical Engineer' },
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showMissionModal, setShowMissionModal] = useState(false);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % projectSlides.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + projectSlides.length) % projectSlides.length);

  const handleOpenModal = () => {
    setActiveModalIndex(currentIndex);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveModalIndex(null);
  };

  useEffect(() => {
    if (!modalOpen) {
      const interval = setInterval(handleNext, 8000);
      return () => clearInterval(interval);
    }
  }, [modalOpen]);

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
          <div className="cta-wrapper">
            <button className="cta-button" onClick={() => setShowTeamModal(true)}>
              Meet Our Team
            </button>
          </div>
        </div>

        <div>
          <h2 className="section-label">What Do We Do?</h2>
          <p>
            We split our time between developing our own <strong>innovations</strong> and partnering
            with teams to solve technical problems and bring new ideas to life. Whether it’s your product
            or ours, we bring <span className="highlight-verb">hustle</span>,
            <span className="highlight-verb"> precision</span>, and
            <span className="highlight-verb"> practicality</span> to the table.
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
              Ruffian was founded by a group of young engineers driven by a desire to create truly impactful products. Instead of shying away from our youth, we've allowed it to vitalize everything we do. Our driving force is our relentless pursuit of innovation. We partner with organizations that have the same ethos of hard work and innovation.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
