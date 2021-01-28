import React from 'react';
import {NavLink} from 'react-router-dom';

//
import StyledNav from './StyledNav';

const Nav = (props) => {
return(
  <StyledNav>
    <nav>
      <ul>
        {/* <NavLink exact to='/'>Home</NavLink> */}
        <NavLink to='/now'>Now</NavLink>
        <NavLink to='/work'>Work</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </ul>
    </nav>
  </StyledNav>
)
};

export default Nav;