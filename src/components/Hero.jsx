import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>🚀 Available for Opportunities</span>
            </div>
            <h1>
              <span className="hero-gradient">Kashif Hussain</span>
            </h1>
            <h2>
              Full-Stack{" "}
              <span className="highlight">Mobile App & Web Developer</span>
            </h2>
            <p className="hero-description">
              With <strong>1+ year of professional experience</strong>{" "}
              specializing in
              <strong>
                {" "}
                React Native, React.js, and modern web technologies
              </strong>
              . Passionate about creating innovative, user-focused solutions
              that deliver exceptional digital experiences. Currently building
              cross-platform applications while pursuing Advanced Diploma in
              Software Engineering.
            </p>

            <div className="hero-tech-stack">
              <span className="tech-label">Tech Stack:</span>
              <div className="tech-icons">
                <span className="tech-icon">⚛️ React</span>
                <span className="tech-icon">📱 React Native</span>
                <span className="tech-icon">🔥 Firebase</span>
                <span className="tech-icon">🎨 Tailwind</span>
                <span className="tech-icon">⚡ Vite</span>
                <span className="tech-icon">🔗 REST APIs</span>
              </div>
            </div>
          </div>

          <div className="hero-graphic">
            <div className="graphic-container">
              <div className="graphic-main">
                <div className="initials">KH</div>
                <div className="graphic-ring"></div>
              </div>
              <div className="graphic-orbits">
                <div className="orbit orbit-1">
                  <div className="orbit-icon">🚀</div>
                </div>
                <div className="orbit orbit-2">
                  <div className="orbit-icon">💻</div>
                </div>
                <div className="orbit orbit-3">
                  <div className="orbit-icon">📱</div>
                </div>
                <div className="orbit orbit-4">
                  <div className="orbit-icon">⭐</div>
                </div>
              </div>
              <div className="graphic-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
