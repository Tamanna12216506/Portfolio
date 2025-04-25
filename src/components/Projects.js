// Projects.js
import React from "react";
import "../styles/Projects.css";
import water from "../assets/Water.png";
import weather from "../assets/weather.jpeg";
import oldage from "../assets/oldage.png";
import workout from "../assets/workout.png";

function Projects() {
  const projects = [
    {
      title: "Weather Music Player",
      duration: "Mar 2024",
      technologies: [
        "Node.js",
        "JavaScript",
        "Bootstrap",
        "CSS",
        "Weather API",
      ],
      image: weather,
      links: {
        github: "https://github.com/Tamanna12216506/WEATHER-MUSIC--PLAYER1",
        live: "https://weather-music-player-i4qo.onrender.com/",
      },
    },
    {
      title: "Aarna Neer - Water Selling System",
      duration: "November 2024",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CSS",
        "Payment Gateway API",
      ],
      image: water,
      links: {
        github: "https://github.com/Tamanna12216506/WATER-SELLING--SYSTEM",
        live: "https://aarna-neer.vercel.app/",
      },
    },
    {
      title: "Old Age Home",
      duration: "December 2024",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Bootstrap",
        "PHP MyAdmin",
        "Payment Gateway API",
      ],
      image: oldage,
      links: {
        github: "https://github.com/Tamanna12216506/OLD_AGE_HOME",
        live: "", // Add if available
      },
    },
    {
      title: "Workout Companion",
      duration: "April 2025",
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "XAMPP",
        "PHP MyAdmin",
      ],
      image: workout,
      links: {
        github: "https://github.com/Tamanna12216506/Workout-Companion",
        live: "", // Add if available
      },
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link demo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="duration">
                    <i className="far fa-calendar-alt"></i>
                    {project.duration}
                  </span>
                </div>

                {/* Optional description or key features */}
                {/* <p className="project-description">{project.description}</p> */}

                {/* If you want to include key features in future */}
                {/* <div className="key-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.keyFeatures?.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div> */}

                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
