//
import React from "react";

//
import "./app.css";
import StyledApp from "./StyledApp";
import SideBar from "./components/SideBar/SideBar";
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
