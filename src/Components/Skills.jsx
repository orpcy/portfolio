import React, { useState } from "react";

const Skills = () => {
  const [skills] = useState([
    {
      id: "ReactJS_skill",
      content: "ReactJS",
      porcentage: "97%",
      value: "97",
    },
    {
      id: "Node_skill",
      content: "Node.js",
      porcentage: "95%",
      value: "95",
    },
    { id: "HTML5_skill", content: "HTML5", porcentage: "99%", value: "99" },
    { id: "CSS3_skill", content: "CSS3", porcentage: "98%", value: "98" },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      porcentage: "94%",
      value: "94",
    },
    {
      id: "Database_skill",
      content: "Database",
      porcentage: "90%",
      value: "90",
    },
    {
      id: "Git_skill",
      content: "Git",
      porcentage: "98%",
      value: "98",
    },
    {
      id: "Wordpress_skill",
      content: "Wordpress",
      porcentage: "80%",
      value: "80",
    },
    {
      id: "Shopify_skill",
      content: "Shopify",
      porcentage: "80%",
      value: "80",
    },
  ]);

  return (
    <div className="skills">
      <h4>EXPERTISE</h4>
      <div className="skills-wrapper">
        <div className="skills-inner">
          {skills.map((skill) => {
            const { id, content, porcentage, value } = skill;
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
                    style={{ width: porcentage }}
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
