import React from "react";

//
import StyledSideBar from "./StyledSideBar";
import Nav from "./components/Nav/Nav";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import Footer from "./components/Footer/Footer";
import Toggle from './components/Toggle/Toggle';

export default function SideBar() {
  return (
    <StyledSideBar>
      {/* <Toggle/> */}
      <WelcomeText />
      <Nav />
      <Footer />
    </StyledSideBar>
  );
}
