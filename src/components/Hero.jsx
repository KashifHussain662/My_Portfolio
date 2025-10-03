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
                <div className="graphic-ring graphic-ring-1"></div>
                <div className="graphic-ring graphic-ring-2"></div>
                <div className="graphic-ring graphic-ring-3"></div>
              </div>

              {/* Orbiting Elements */}
              <div className="orbiting-elements">
                <div className="orbit-item orbit-item-1">
                  <div className="orbit-icon">🚀</div>
                </div>
                <div className="orbit-item orbit-item-2">
                  <div className="orbit-icon">💻</div>
                </div>
                <div className="orbit-item orbit-item-3">
                  <div className="orbit-icon">📱</div>
                </div>
                <div className="orbit-item orbit-item-4">
                  <div className="orbit-icon">⭐</div>
                </div>
                <div className="orbit-item orbit-item-5">
                  <div className="orbit-icon">⚡</div>
                </div>
                <div className="orbit-item orbit-item-6">
                  <div className="orbit-icon">🔧</div>
                </div>
              </div>

              {/* Animated Circles */}
              <div className="animated-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
              </div>

              {/* Floating Particles */}
              <div className="floating-particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>
                <div className="particle particle-6"></div>
                <div className="particle particle-7"></div>
                <div className="particle particle-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
