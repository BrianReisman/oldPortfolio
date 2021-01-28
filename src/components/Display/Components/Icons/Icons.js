import React from 'react';
import StyledIcons from './StyledIcons';
import LinkedInLogo from '../../../../assets/images/LI-In-Bug.png'
import GitHubLogo from '../../../../assets/images/GitHub-Mark-32px.png'

const Icons = (props) => {
return(
  <StyledIcons>
          <a
        href="https://www.linkedin.com/in/brian-reisman/"
        className="linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedInLogo} alt="Linked In logo" />
      </a>
      <a
        href="https://github.com/BrianReisman"
        className="github"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GitHubLogo} alt="Github logo" />
      </a>
  </StyledIcons>
)
};

export default Icons;