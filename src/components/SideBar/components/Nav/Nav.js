import React from 'react';
import {Link} from 'react-router-dom';

//
import StyledNav from './StyledNav';

const Nav = (props) => {
return(
  <StyledNav>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/now'>Now</Link></li>
        <li><Link to='/work'>Work</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </StyledNav>
)
};

export default Nav;