import React from "react";
import { Route } from "react-router-dom";
//
import StyledDisplay from "./StyledDisplay";
import Home from "./Components/Home/Home";

const Display = (props) => {
  return (
    <StyledDisplay>
      <Route exact path="/" component={Home} />
    </StyledDisplay>
  );
};

export default Display;
