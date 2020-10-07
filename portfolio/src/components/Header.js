import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      

      <nav>
        <Link to="/aboutme"><p>About Me</p></Link>
        <p>Resume</p>
        <Link to="/portfolio"><p>Portfolio</p></Link>
        <p>Contact Me</p>
      </nav>
    </div>
  );
}

export default Header;



