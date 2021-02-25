import React from "react";
import StyledProjectCard from "./StyledProjectCard";

const ProjectCard = ({ projectData: data }) => {
  console.log(data);

  return (
    <StyledProjectCard>
      <h2>{data.name}</h2>
      <div className="imgRow">
        <img src={data.imageSrc} alt={data.imgAltText} />
        <div className="textDiv">
          <p>{data.description}</p>
          <p>
            {[
              data.deploymentLink && (
                <span key='1'>
                  <a href="/" target="_blank" rel="noreferrer">
                    deployment Link
                  </a>
                </span>
              ),
              data.wireframe && (
                <span key='2'>
                  {" "}
                  ||{" "}
                  <a href="/" target="_blank" rel="noreferrer">
                    wireframe
                  </a>
                </span>
              ),
              data.repoLink && (
                <span key='3'>
                  {" "}
                  ||{" "}
                  <a href="/" target="_blank" rel="noreferrer">
                    GitHub repo
                  </a>
                </span>
              ),
            ]}
          </p>
        </div>
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
