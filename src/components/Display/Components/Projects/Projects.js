import React from "react";

//components
import StyledProjects from "./StyledProjects";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = (props) => {
  return (
    <StyledProjects>
      {/* <div>Projects</div> */}
      <div className="grid">
        <div className="projectRows">
          <ProjectCard num="1" />
          {/* <ProjectCard num="2" /> */}
        </div>
        {/* <div className="projectRows">
          <ProjectCard num="3" />
          <ProjectCard num="4" />
        </div> */}
      </div>
    </StyledProjects>
  );
};

export default Projects;
