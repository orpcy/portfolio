import React, { useState } from "react";

const Skills = () => {
  const [skills] = useState([
    {
      id: "ReactJS_skill",
      content: "ReactJS",
      percentage: "97%",
      value: "97",
    },
    {
      id: "Node_skill",
      content: "Node.js",
      percentage: "95%",
      value: "95",
    },
    { id: "HTML5_skill", content: "HTML5", percentage: "99%", value: "99" },
    { id: "CSS3_skill", content: "CSS3", percentage: "98%", value: "98" },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      percentage: "94%",
      value: "94",
    },
    {
      id: "Redux_skill",
      content: "Redux",
      percentage: "92%",
      value: "92",
    },
    {
      id: "NextJS_skill",
      content: "NextJS",
      percentage: "90%",
      value: "90",
    },
    {
      id: "Database_skill",
      content: "Databases",
      percentage: "90%",
      value: "90",
    },
    {
      id: "Git_skill",
      content: "Git",
      percentage: "98%",
      value: "98",
    },
    {
      id: "Figma_skill",
      content: "Figma",
      percentage: "94%",
      value: "94",
    },
  ]);

  return (
    <div className="skills">
      <h4>EXPERTISE</h4>
      <div className="skills-wrapper">
        <div className="skills-inner">
          {skills.map((skill) => {
            const { id, content, percentage, value } = skill;
            return (
              <div className="progress-wrap" key={id}>
                <div className="skills-percent">
                  <span>{content}</span>
                  {/* <span>{porcentage}</span> */}
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: percentage }}
                    aria-valuenow={value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="skills-img">
          <img src="/img/computer.png" alt="programming" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
