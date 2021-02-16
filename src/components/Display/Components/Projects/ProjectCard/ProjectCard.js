import React from "react";
import StyledProjects from "./StyledProjectCard";

import image from "../../../../../assets/images/FamilyRecipeSignUp.png";

const ProjectCard = (props) => {
  return (
    <StyledProjects>
      <h2>Family Recipe Keeper</h2>
      <div className="imgRow">
        <img src={image} alt="iamge of project" />
        <div className="textDiv">
          <p>
            This app stores all of your family recipes. You can create your own
            account to poke around or sign in with our hardcoded user's info at{" "}
            <a
              href="https://family-recipes-ten.vercel.app/signup"
              target="_blank"
              rel="noreferrer"
            >
              family-Recipes.com
            </a>.{" "}
            This React app manages state with Redux and uses Styled-Components
            for styling, and is deployed on Vercel.{" "}
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
      </div>
    </StyledProjects>
  );
};

export default ProjectCard;
