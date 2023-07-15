import React, { useState } from "react";

interface SkillTypes {
  id: string;
  content: string;
  percentage: string;
  value: string;
};

const Skills = () => {
  const [skills] = useState<Array<SkillTypes>>([
    {
      id: "ReactJS_skill",
      content: "ReactJS",
      percentage: "100%",
      value: "100",
    },
    {
      id: "Node_skill",
      content: "Node.js",
      percentage: "97%",
      value: "97",
    },
    { id: "HTML5_skill", content: "HTML5", percentage: "100%", value: "100" },
    { id: "CSS3_skill", content: "CSS3", percentage: "100%", value: "100" },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      percentage: "98%",
      value: "98",
    },
    {
      id: "Redux_skill",
      content: "Redux",
      percentage: "94%",
      value: "94",
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
      percentage: "96%",
      value: "96",
    },
    {
      id: "Git_skill",
      content: "Git",
      percentage: "98%",
      value: "98",
    },
    {
      id: "Firebase_skill",
      content: "Firebase",
      percentage: "92%",
      value: "92",
    },
    {
      id: "UI/UX_skill",
      content: "UI/UX Design",
      percentage: "94%",
      value: "94",
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
            const { id, content, percentage } = skill;
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
