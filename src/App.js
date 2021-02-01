//
import React, {useState} from "react";
// import { Route } from "react-router-dom";
import "./app.css";
//components
import StyledApp from "./StyledApp";
import SideBar from "./components/SideBar/SideBar";
// import Home from "./components/Display/Home/Home";
// import Now from "./components/Display/Now/Now";
import Display from "./components/Display/Display";

const App = () => {
  return (
    <StyledApp>
      <SideBar />
      <Display />
    </StyledApp>
  );
};

export default App;

//* <Route> with render={} requires a return
