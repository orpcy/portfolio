import React, { useState } from "react";

const Projects = () => {
  const [webProjects] = useState([
    { url: "/img/web_projects/unplugdd_home.png", title: "UNPLUGDD" },
    { url: "/img/web_projects/smartBits.png", title: "THE SMARTBITS" },
    { url: "/img/web_projects/Enterprise.png", title: "ENTERPRISE" },
    { url: "/img/web_projects/AGS.png", title: "ACCELERATED GROWTH SOLUTIONS" },
    { url: "/img/web_projects/Alamo.png", title: "ALAMO" },
    { url: "/img/web_projects/Fiixy.png", title: "FIIXY" },
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
