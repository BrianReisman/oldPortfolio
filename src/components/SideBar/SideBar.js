import React from "react";

//
import StyledSideBar from "./StyledSideBar";
import Nav from "./components/Nav/Nav";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import Footer from "./components/Footer/Footer";

export default function SideBar() {
  return (
    <StyledSideBar>
      {/* toggle */}
      <WelcomeText />
      <Nav />
      <Footer />
    </StyledSideBar>
  );
}
