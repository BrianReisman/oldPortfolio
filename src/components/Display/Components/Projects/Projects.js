import React from "react";
import { motion } from "framer-motion";

//components
import StyledProjects from "./StyledProjects";
import ProjectCard from "./ProjectCard/ProjectCard";
import {
  pageVariants,
  pageTransition,
} from "../../../../styles/animation";

const Projects = (props) => {
  return (
    <StyledProjects>
      <motion.div
        className="motion"
        exit="out"
        animate="in"
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
      >
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
      </motion.div>
    </StyledProjects>
  );
};

export default Projects;
