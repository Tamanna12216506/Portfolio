import React, { useState } from 'react';
import '../styles/Certificates.css';
import { motion } from 'framer-motion';

// Import certificate images
import Android from '../assets/Android.png';
import cyber from '../assets/cyber.png';
import webd from '../assets/Webd.png';
import php from '../assets/php.png';


function Certificates() {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificates = [
    {
      title: "Cyber Security And Privacy",
      issuer: "NPTEL",
      date: "December 2025",
      icon: "fas fa-brain",
      link: "https://drive.google.com/file/d/1SdGmHF7CqQf3mmCLLtAOwB_MTQWu2duA/view?usp=sharing",
      image: cyber,
      color: "#A78ADB" // Lavender Purple
    },
    {
      title: "Fundamentals in Kotlin",
      issuer: "Coursera",
      date: "November 2024",
      icon: "fas fa-cogs",
      link: "https://drive.google.com/file/d/1gEnV_FBlTGbviHpPf5I5CkkxwLJPwEEz/view?usp=sharing",
      image: Android,
      color: "#FF6B6B" // Coral Red
    },
    {
      title: "HTML,CSS and JavaScript",
      issuer: "Coursera",
      date: "May 2024",
      icon: "fas fa-brain",
      link: "https://drive.google.com/file/d/1I-lNQCX2764zRnY9OQYprBne8FqrqN6F/view?usp=sharing",
      image: webd,
      color: "#FF9F1C" // Bright Orange
    },
   
    {
      title: "Building Web Applications in PHP",
      issuer: "Coursera",
      date: "May 2024",
      icon: "fas fa-code",
      link: "https://drive.google.com/file/d/1lpvVVZlpc0_nYt2iHnYiXrSHGbrpD_IW/view?usp=sharing",
      image: php,
      color: "#4ECDC4" // Turquoise
    },
  ];

  const handleScrollClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="certificates">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div 
              className="certificate-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              style={{
                '--accent-color': cert.color,
                '--accent-gradient': `linear-gradient(135deg, ${cert.color} 0%, ${cert.color}CC 100%)`
              }}
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div 
                className="certificate-image-wrapper"
                style={{ 
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '15px'
                }}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="certificate-image"
                />
                {hoveredCert === index && (
                  <motion.div 
                    className="certificate-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-certificate-btn"
                    >
                      View Certificate
                    </a>
                  </motion.div>
                )}
              </div>
              
              <div className="certificate-content">
                <div 
                  className="certificate-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${cert.color}, ${cert.color}CC)` 
                  }}
                >
                  <i className={cert.icon}></i>
                </div>
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-details">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="date">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <motion.div 
          className="scroll-indicator" 
          onClick={handleScrollClick} 
          role="button" 
          tabIndex={0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Certificates;