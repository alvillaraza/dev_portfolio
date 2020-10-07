import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      

      <nav>
        <Link to="/about-me"><p>About Me</p></Link>
        <p>Resume</p>
        <Link to="/portfolio"><p>Portfolio</p></Link>
        <Link to="/contact-me"><p>Contact Me</p></Link>
      </nav>
    </div>
  );
}

export default Header;



