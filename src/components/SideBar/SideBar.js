import React from "react";

//
import StyledSideBar from "./StyledSideBar";
import Nav from "./components/Nav/Nav";
import WelcomeText from "./components/Text/WelcomeText";
// import Toggle from './components/Toggle/Toggle';

export default function SideBar() {
  return (
    <StyledSideBar>
      {/* <Toggle/> */}
      <WelcomeText />
      <Nav />
    </StyledSideBar>
  );
}


// Footer alt: Built by Brian, 2020, using React. Brought to you in part by electricity.