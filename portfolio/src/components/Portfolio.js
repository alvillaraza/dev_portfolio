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
                <a href='https://animal-crossing-git-main.alvillaraza.vercel.app/' target="_blank">
                    <img src={acnh} />
                    <p>Animal Crossing Fun App</p>
                </a>
                <p>Tech Stack: LESS, React</p>
                <p>github: <a href="https://github.com/alvillaraza/animal-crossing" target="_blank">https://github.com/alvillaraza/animal-crossing</a></p>
            </div>
            <div className='portfolio-piece'>
                <a href='https://www.refresh-app.com/'target="_blank" >
                    <img src={refresh} />
                    <p>Wellness Tracker App</p>
                </a>
                <p>Tech Stack: React, Redux, Node</p>
                <p>
            github: <a href="https://github.com/Lambda-School-Labs/refresh-fe" target="_blank">https://github.com/Lambda-School-Labs/refresh-fe</a>
                </p>
                <p>
                    github-backend: <a href="https://github.com/Lambda-School-Labs/refresh-be" target="_blank">
                    https://github.com/Lambda-School-Labs/refresh-be</a>
                </p>
            </div>
            <div className='portfolio-piece'>
                <a href='https://user-interface-eight.vercel.app/' target="_blank">
                    <img src={ui} />
                    <p>Landing Page and About Page</p>
                </a>
                <p>Tech Stack: HTML, LESS </p>
                <p>
                    github: <a href="https://user-interface-eight.vercel.app/" target="_blank">
                    https://user-interface-eight.vercel.app/</a>
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
