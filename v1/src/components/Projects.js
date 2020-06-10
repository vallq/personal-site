import React from "react";
import projects from "../projects";
import "./Projects.css";

const Projects = () => {
  const allProjects = projects.map((proj) => {
    return (
      <div className="card">
        <h3>{proj.name}</h3>
        <p>{proj.description}</p>
        <h6>
          <a href={proj.link} rel="noopener noreferrer" target="_blank">
            github link
          </a>
        </h6>
      </div>
    );
  });
  return <div className="projects">{allProjects}</div>;
};

export default Projects;
