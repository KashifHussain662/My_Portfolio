import React from "react";

const Skills = () => {
  const skillsData = {
    "Mobile App Development": [
      { name: "React Native", level: 90 },
      { name: "Flutter (Basic)", level: 40 },
      { name: "JavaScript", level: 85 },
    ],
    "Web Development": [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "React", level: 80 },
    ],
    "Tools & Technologies": [
      { name: "RESTful APIs", level: 75 },
      { name: "Git & GitHub", level: 80 },
      { name: "Firebase", level: 70 },
      { name: "Expo", level: 85 },
    ],
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul className="skills-list">
                {skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
