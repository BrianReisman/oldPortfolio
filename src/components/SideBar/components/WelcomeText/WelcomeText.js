import React from 'react';

//
import StyledWelcomeText from './StyledWelcomeText';

const WelcomeText = (props) => {
return(
  <StyledWelcomeText>
    <span className="accent"></span>
    <span className="accent"></span>
    <span className="accent"></span>
    <span className="accent"> </span>
    
    <p className="name">I<span className="accent">'</span>m</p>
    <p className="name">Brian</p>
    <p className="name">Reisman<span className="accent">,</span></p>
    <p>and I <s>break</s> make things on the internet/web/code<span className="lastAccent">.</span></p>
  </StyledWelcomeText>
)
};

export default WelcomeText;