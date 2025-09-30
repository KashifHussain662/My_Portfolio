import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "CloudVault - Document Management System",
      description:
        "Cross-platform document management system with web (React.js) and Android (React Native) apps. Features include document scanning, sharing, password protection, and real-time chat.",
      technologies: ["React Native", "React.js", "Firebase", "JavaScript"],
      github: "https://github.com/KashifHussain662",
      demo: "#",
      icon: "📁",
    },
    {
      title: "Alveen Luxe - E-Commerce Platform",
      description:
        "Full-stack e-commerce platform with customer and admin panels. Built with React.js, Tailwind CSS, and Firebase for authentication and database.",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Vite"],
      github: "https://github.com/KashifHussain662",
      demo: "#",
      icon: "🛒",
    },
    {
      title: "Online Lawyer Services Website",
      description:
        "Web-based platform connecting clients with lawyers. Features include appointment booking, search by specialization, and admin panel for management.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/KashifHussain662/2nd_Semester_eproject",
      demo: "#",
      icon: "⚖️",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">{project.icon}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
