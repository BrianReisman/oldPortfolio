import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        {/* <NavLink exact to='/'>Home</NavLink> */}
        <NavLink to="/now">Now</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
