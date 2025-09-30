import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a
            href="https://github.com/KashifHussain662"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:kashif662@gmail.com" className="social-link">
            Email
          </a>
          <a href="#contact" className="social-link">
            Hire Me
          </a>
        </div>
        <p>&copy; 2024 Kashif Hussain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
