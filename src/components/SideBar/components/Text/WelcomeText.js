import React from "react";
import { NavLink } from "react-router-dom";
import StyledText from './StyledText';
const WelcomeText = (props) => {

  return (
    <StyledText>
      <div className="welcome">
        <p className="name">
          I
          <span className="accent">
            <NavLink to="/">'</NavLink>
          </span>
          m
        </p>
        <p className="name">Brian</p>
        <p className="name">
          Reisman<span className="accent">,</span>
        </p>

        <p className="text">
          and I <s>break</s> make things for the web
          <span className="lastAccent">.</span>
        </p>
        {/* <p>and I use code to <s>break</s> make things for the web<span className="lastAccent">.</span></p> */}
        {/* <p>and I <s>break</s> make things out of code ?for the web?<span className="lastAccent">.</span></p> */}

      </div>
    </StyledText>
  );
};

export default WelcomeText;
