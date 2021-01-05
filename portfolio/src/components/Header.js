import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='vertical-menu'>
            {/* <div className='nav-menu'> */}
            <Link to='/about-me'>
                <p>About Me</p>
            </Link>

            <Link to='/resume'>
                <p> Resume</p>
            </Link>

            <Link to='/portfolio'>
                <p>Portfolio</p>
            </Link>
            <Link to='/'>
                <p>Contact Me</p>
            </Link>
            {/* </div> */}
        </nav>
    );
}

export default Header;
