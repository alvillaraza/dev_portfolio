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
                <a
                    href='https://animal-crossing-git-main.alvillaraza.vercel.app/'
                    target='_blank' rel='noopener noreferrer'
                >
                    <img src={acnh} alt="" />
                    <p>Animal Crossing Fun App</p>
                </a>
                <p>Tech Stack: LESS, React</p>
                <p>
                    Github:{' '}
                    <a
                        href='https://github.com/alvillaraza/animal-crossing'
                        target='_blank' rel='noopener noreferrer'
                    >
                        https://github.com/alvillaraza/animal-crossing
                    </a>
                </p>
                I worked on this app to brush up on my CSS/LESS skills as it was my
                weakest suit at the time. Placing the pagination buttons around
                large images was a challenge. I learned the proper use of
                negative margins and position absolute.
            </div>
            <div className='portfolio-piece'>
                <a href='https://www.refresh-app.com/' target='_blank' rel='noopener noreferrer'>
                    <img src={refresh} alt="" />
                    <p>Wellness Tracker App</p>
                </a>
                <p>Tech Stack: React, Redux, Node</p>
                <p>
                    Github:{' '}
                    <a
                        href='https://github.com/Lambda-School-Labs/refresh-fe'
                        target='_blank' rel='noopener noreferrer'
                    >
                        https://github.com/Lambda-School-Labs/refresh-fe
                    </a>
                </p>
                <p>
                    Github-backend:{' '}
                    <a
                        href='https://github.com/Lambda-School-Labs/refresh-be'
                        target='_blank' rel='noopener noreferrer'
                    >
                        https://github.com/Lambda-School-Labs/refresh-be
                    </a>
                </p>
                I worked on this app during the labs portion at Lambda School
                with 3 other developers. I touched on both the backend and the
                frontend. The most challenging piece about this project was
                getting the data to update on the admin side as it updates on
                the user side. We received this project from a previous team who
                was using a different pattern. As a team, we decided to switch
                the pattern to redux to handle states globally, fixing the issue.
            </div>
            <div className='portfolio-piece'>
                <a
                    href='https://user-interface-eight.vercel.app/'
                    target='_blank' rel='noopener noreferrer'
                >
                    <img src={ui} alt="" />
                    <p>Landing Page and About Page</p>
                </a>
                <p>Tech Stack: HTML, LESS </p>
                <p>
                    github:{' '}
                    <a
                        href='https://user-interface-eight.vercel.app/'
                        target='_blank' rel='noopener noreferrer'
                    >
                        https://user-interface-eight.vercel.app/
                    </a>
                </p>
                This was my first project done in one week with a group of developers. I was in charge of the Landing Page and the About Page. This was a quick and easy introduction to HTML and CSS/LESS.
            </div>
        </div>
    );
}

export default AboutMe;
