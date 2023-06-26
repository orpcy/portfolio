import React, { useState } from "react";

const Projects = () => {
  const [webProjects] = useState([
    {
      url: "/img/web_projects/unplugdd_home.png",
      title: "UNPLUGDD",
      tags: ["reactJS", "nextJS", "bootstrap", "mongoDB", "nodeJS"],
    },
    {
      url: "/img/web_projects/smartBits.png",
      title: "THE SMARTBITS",
      tags: ["scss", "html5", "javascript", 'api', "nodeJS", "express"],
    },
    {
      url: "/img/web_projects/Enterprise.png",
      title: "ENTERPRISE",
      tags: ["vanillaJS", "css", "jquery", 'core-ui', 'html', "reactJS"],
    },
    {
      url: "/img/web_projects/AGS.png",
      title: "ACCELERATED GROWTH SOLUTIONS",
      tags: ["html5", "css", "javascript", "jquery"],
    },
    {
      url: "/img/web_projects/Alamo.png",
      title: "ALAMO",
      tags: ["jquery", "css", "vanillaJS", "html"],
    },
    {
      url: "/img/web_projects/Fiixy.png",
      title: "FIIXY",
      tags: ["reactJS", "nodeJS", "mongoDB", "css3"],
    },
  ]);

  const [designProjects] = useState([
    { url: "/img/design_projects/knowklub.png", title: "KNOWKLUB" },
    { url: "/img/design_projects/carlix.png", title: "CARLIX" },
    { url: "/img/design_projects/theramed.png", title: "THERAMED" },
    { url: "/img/design_projects/calmmind.png", title: "CALMMIND" },
  ]);

  return (
    <div className="projects-wrapper">
      <h4 id="web_projects">WEB PROJECTS</h4>
      <div className="projects">
        {webProjects.map((m, i) => {
          const { url, title, tags } = m;
          return (
            <div key={i} className="inner">
              <img src={url} alt="project" />
              <div className="overlay">
                <h5>{title}</h5>
              </div>
              <div className="tags">
                {tags.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <h4 className="design-title" id="design_projects">
        DESIGN PROJECTS
      </h4>
      <div className="projects design">
        {designProjects.map((m, i) => {
          const { url, title } = m;
          return (
            <div key={i} className="inner">
              <img src={url} alt="project" />
              <div className="overlay">
                <h5>{title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
