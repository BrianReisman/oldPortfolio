import React from 'react'
import {Link} from 'react-router-dom';

export default function SideBar() {
  return (
    <div>
      hi from SideBar.js
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/now'>Now</Link></li>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
