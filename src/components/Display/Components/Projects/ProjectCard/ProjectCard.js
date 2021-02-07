import React from "react";
import StyledProjects from "./StyledProjectCard";

import image from "../../../../../assets/images/GitHub-Mark-32px.png";

const ProjectCard = (props) => {
  return (
    <StyledProjects>
      <h2>Family Recipe Keeper</h2>
      <div className="imgRow">
        <div className="img">
          <img src={image} alt="iamge of project" />
        </div>
        <div className="textDiv">
          <p>
            This app stores all of your family recipes handed down from
            generation to generation so you can securely keep your recipes safe
            and on hand at all times! Create your free account at{" "}
            <a
              href="https://family-recipes-ten.vercel.app/signup"
              target="_blank"
              rel="noreferrer"
            >
              family-Recipes.com
            </a>
          </p>
        </div>
      </div>
      <div className="textDiv">
        <p>
          This is a React app that manages state using Redux and is styled with
          Styled-Components{' '}
          <a
            href="https://github.com/Secret-Recipes-Build-Week/frontend"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>
          .
        </p>
      </div>
    </StyledProjects>
  );
};

export default ProjectCard;
