import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='vertical-menu'>
            <Link to='/resume'>
                <p> Resume</p>
            </Link>

            <Link to='/portfolio'>
                <p>Portfolio</p>
            </Link>
            <Link to='/about-me'>
                <p>About Me</p>
            </Link>
            <Link to='/'>
                <p>Contact</p>
            </Link>
        </nav>
    );
}

export default Header;
