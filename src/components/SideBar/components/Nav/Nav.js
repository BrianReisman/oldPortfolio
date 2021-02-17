import React from "react";
import { NavLink } from "react-router-dom";
import StyledNav from './StyledNav';

const Nav = (props) => {
  return (
    <StyledNav>
      <ul>
        {/* <NavLink exact to='/'>Home</NavLink> */}
        <NavLink to="/now">Now</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </StyledNav>
  );
};

export default Nav;
