import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Content */}
          <div className="footer-main">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-header">
                <h3 className="footer-title">
                  Kashif <span className="footer-accent">Hussain</span>
                </h3>
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>

              <p className="footer-description">
                Full-Stack Mobile App & Web Developer passionate about creating
                innovative, user-focused solutions that deliver exceptional
                digital experiences.
              </p>

              {/* Social Links */}
              <div className="social-links-modern">
                <a
                  href="https://github.com/KashifHussain662"
                  className="social-link-modern"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon">
                    <span>🐱</span>
                  </div>
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:kashif662@gmail.com"
                  className="social-link-modern"
                >
                  <div className="social-icon">
                    <span>📧</span>
                  </div>
                  <span>Email</span>
                </a>
                <a href="#contact" className="social-link-modern">
                  <div className="social-icon">
                    <span>💼</span>
                  </div>
                  <span>Hire Me</span>
                </a>
              </div>
            </div>

            {/* Links Grid */}
            <div className="footer-links-grid">
              <div className="footer-column">
                <h4 className="footer-column-title">
                  <div className="title-icon">🚀</div>
                  Navigation
                </h4>
                <ul className="footer-list">
                  {["Home", "About", "Skills", "Projects", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="footer-link-modern"
                        >
                          <span className="link-bullet">•</span>
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">
                  <div className="title-icon">⚡</div>
                  Services
                </h4>
                <ul className="footer-list">
                  {[
                    "Web Development",
                    "Mobile App Development",
                    "React Native Apps",
                    "UI/UX Design",
                    "Technical Consultation",
                  ].map((service) => (
                    <li key={service}>
                      <span className="footer-link-modern">
                        <span className="link-bullet">•</span>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">
                  <div className="title-icon">📞</div>
                  Get In Touch
                </h4>
                <div className="contact-actions">
                  <a href="#contact" className="cta-button primary">
                    Contact
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="cta-button secondary"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack-section">
            <div className="tech-scroll">
              <div className="tech-scroll-content">
                {[
                  "React",
                  "React Native",
                  "JavaScript",
                  "TypeScript",
                  "Firebase",
                  "Tailwind CSS",
                  "Node.js",
                  "REST APIs",
                  "Git",
                  "VS Code",
                  "Figma",
                  "Vite",
                ].map((tech, index) => (
                  <div
                    key={tech}
                    className="tech-chip"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="tech-icon">⚡</span>
                    {tech}
                  </div>
                ))}
                {[
                  "React",
                  "React Native",
                  "JavaScript",
                  "TypeScript",
                  "Firebase",
                  "Tailwind CSS",
                  "Node.js",
                  "REST APIs",
                  "Git",
                  "VS Code",
                  "Figma",
                  "Vite",
                ].map((tech, index) => (
                  <div
                    key={`${tech}-dup`}
                    className="tech-chip"
                    style={{ animationDelay: `${(index + 12) * 0.1}s` }}
                  >
                    <span className="tech-icon">⚡</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <div className="copyright-content">
                <p className="copyright-text">
                  &copy; {currentYear} <strong>Kashif Hussain</strong>. All
                  rights reserved.
                </p>
                <p className="build-with">
                  Crafted with <span className="heart">💙</span> using React &
                  Modern Web Technologies
                </p>
              </div>
            </div>

            <div className="footer-cta">
              <div className="cta-bubble">
                <span className="bubble-text">
                  Ready to create something amazing?
                </span>
                <a href="#contact" className="bubble-button">
                  Let's Connect <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
