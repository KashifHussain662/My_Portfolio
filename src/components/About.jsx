import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          {/* Left Side - Content */}
          <div className="about-text-content">
            <div className="about-header">
              <div className="title-wrapper">
                <h3>Transforming Ideas Into</h3>
                <h3 className="gradient-text">Digital Reality</h3>
              </div>
              <div className="experience-badge">
                <span>🚀 1+ Years Professional Experience</span>
              </div>
            </div>

            <div className="about-description">
              <p>
                I'm a passionate <strong>Mobile App & Web Developer</strong>{" "}
                with
                <strong> over 1 year of professional experience</strong>{" "}
                specializing in
                <strong> React Native and modern web technologies</strong>. My
                journey in software development started with a curiosity for how
                things work, and has evolved into a passion for creating
                solutions that make a difference.
              </p>

              <p>
                Currently working as a <strong>React Native Developer</strong>{" "}
                at Archive Services while pursuing my{" "}
                <strong>Advanced Diploma in Software Engineering</strong>. I
                thrive on turning complex challenges into elegant, user-friendly
                applications.
              </p>
            </div>

            <div className="about-cta">
              <a
                href="/Kashif-Hussain.pdf"
                download
                className="btn btn-primary"
              >
                <span className="btn-icon">📄</span>
                Download Resume
              </a>
              <a href="#projects" className="btn btn-secondary">
                <span className="btn-icon">🚀</span>
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                <span className="btn-icon">💼</span>
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="about-visual">
            <div className="visual-container">
              <div className="main-card">
                <div className="card-content">
                  <div className="code-symbol">{`</>`}</div>
                  <h4>Code & Creativity</h4>
                  <p>Building the future, one line at a time</p>
                </div>
                <div className="card-glow"></div>
              </div>

              <div className="floating-cards">
                <div className="floating-card card-1">
                  <span>🚀</span>
                  <span>Fast</span>
                </div>
                <div className="floating-card card-2">
                  <span>🎯</span>
                  <span>Precise</span>
                </div>
                <div className="floating-card card-3">
                  <span>⚡</span>
                  <span>Efficient</span>
                </div>
                <div className="floating-card card-4">
                  <span>🔧</span>
                  <span>Reliable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
