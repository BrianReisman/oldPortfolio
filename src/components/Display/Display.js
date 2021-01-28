import React from "react";
import { Route, useHistory } from "react-router-dom";
//
import StyledDisplay from "./StyledDisplay";
import Home from "./Components/Home/Home";
import Now from './Components/Now/Now';

const Display = (props) => {
  const history = useHistory();
  console.log(history.location.pathname)

  return (
    <StyledDisplay>
      {/* <div className="top"> */}
      {/* <h1>static h1 on {history.location.pathname}</h1> */}
      {/* </div> */}
      <Route exact path="/" component={Home} />
      <Route path="/now" component={Now} />
    </StyledDisplay>
  );
};

export default Display;
