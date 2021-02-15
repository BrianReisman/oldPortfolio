import React from "react";

//
import StyledSideBar from "./StyledSideBar";
import Nav from "./components/Nav";
import WelcomeText from "./components/WelcomeText";
// import Toggle from './components/Toggle/Toggle';

export default function SideBar() {
  return (
    <StyledSideBar>
      {/* <Toggle/> */}
      <WelcomeText />
      <Nav />
      <code>Built by Brian. Brought to you in part by electricity. 2021</code>
    </StyledSideBar>
  );
}


// Footer alt: Built by Brian, 2020, using React. Brought to you in part by electricity.