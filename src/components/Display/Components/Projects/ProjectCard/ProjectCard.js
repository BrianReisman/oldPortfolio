import React from "react";
import StyledProjects from "./StyledProjectCard";

import image from "../../../../../assets/images/GitHub-Mark-32px.png";

const ProjectCard = (props) => {
  return (
    <StyledProjects>
      <h2>Family Recipe Keeper</h2>
      <div className="imgRow">
        <div className="img">
          <img src={image} alt="iamge of product" />
        </div>
        <div className="textDiv">
          <p>
            Here is a place to store all of your family recipes handed down from
            generation to generation. Grandma's recipes in her beautiful cursive
            are getting lost or are hard to read. Create your free account at{" "}
            <a href="https://family-recipes-ten.vercel.app/">
              familyRecipies.com
            </a>{" "}
            where you securely keep your recipes safe and on hand at all times!
          </p>
        </div>
      </div>
      <div className="textDiv">
        <p>
          Stack: React, Router, Redux, and Styled-Components.{" "}
          <a href="https://github.com/Secret-Recipes-Build-Week/frontend">
            GitHub repo
          </a>
        </p>
      </div>
    </StyledProjects>
  );
};

export default ProjectCard;
