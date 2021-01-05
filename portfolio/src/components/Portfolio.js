import React from 'react';

import ui from './images/ui.png';
import refresh from './images/refresh.png';
import acnh from './images/acnh.png';
import '../Portfolio.css';

function AboutMe() {
    return (
        <div className='portfolio-container'>
            <h1>Portfolio</h1>
            <div className='portfolio-piece'>
                <a href='https://animal-crossing-git-main.alvillaraza.vercel.app/'>
                    <img src={acnh} />
                    <p>Animal Crossing Fun App</p>
                </a>
                <p>Tech Stack: LESS, React</p>
                <p>github: https://github.com/alvillaraza/animal-crossing</p>
            </div>
            <div className='portfolio-piece'>
                <a href='https://www.refresh-app.com/'>
                    <img src={refresh} />
                    <p>Wellness Tracker App</p>
                </a>
                <p>Tech Stack: React, Redux, Node</p>
                <p>
                    github-frontend:
                    https://github.com/Lambda-School-Labs/refresh-fe
                </p>
                <p>
                    github-backend:
                    https://github.com/Lambda-School-Labs/refresh-be
                </p>
            </div>
            <div className='portfolio-piece'>
                <a href='https://build-week-airbnb-optimal-price-4.github.io/user-interface/'>
                    <img src={ui} />
                    <p>Landing Page and About Page</p>
                </a>
                <p>Tech Stack: HTML, LESS </p>
                <p>
                    github:
                    https://github.com/Build-Week-Airbnb-Optimal-Price-4/user-interface
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
