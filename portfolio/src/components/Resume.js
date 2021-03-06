import React from 'react';

import '../Resume.css';

function Resume() {
    return (
        <div className='resume-container'>
            <div className='resume-links'>
                <a href='https://www.linkedin.com/in/alvillaraza/' target="_blank">
                    https://www.linkedin.com/in/alvillaraza/
                </a>
                <a href='https://github.com/alvillaraza' target="_blank">
                    https://github.com/alvillaraza
                </a>
            </div>
            <div className='resume-contact-info'>
                <h1>Alexis Villaraza</h1>
                <h3>
                    (480) 703-7967 |{' '}
                    <a href='mailto:alexis.borja@gmail.com'>
                        alexis.borja@gmail.com
                    </a>
                </h3>
                <address>Tempe, AZ 85282</address>
            </div>

            <div className='resume-skills'>
                <h2>HTML</h2> <h2>CSS</h2> <h2>Javascript</h2>{' '}
                <h2>Bootstrap</h2> <h2>React</h2> <h2>Redux</h2> <h2>Node</h2>{' '}
                <h2>SQL</h2> <h2>Python</h2> <h2>GIT</h2> <h2>Agile</h2>{' '}
                <h2>MS Office Suite</h2>
            </div>

            <div className='resume-summary'>
                Experienced entrepreneur and adaptable professional, skilled in
                management and event planning. Calm under pressure, I believe in
                delivering high quality work on time, every time. Currently
                contracting at Strongmind, aiming to leverage my skills to
                become a successful Full Stack Web Developer.
            </div>
            <div className='resume-experience'>
                <div className='resume-each-job'>
                    <div className='resume-job-facts'>
                        <div className='resume-job-titleandco'>
                            <div className='resume-job-title'>
                                Frontend Web Developer (contract)
                            </div>{' '}
                            <h3>Strongmind</h3>
                        </div>
                        <p>October 2020 - present</p>
                    </div>
                    <ul>
                        <li>
                            Front end web development of interactive interfaces
                            using LESS, React, and Gatsby
                        </li>
                        <li>
                            Updates data layer for interactive interfaces on
                            educational platforms
                        </li>
                    </ul>
                </div>
                <div className='resume-each-job'>
                    <div className='resume-job-facts'>
                        <div className='resume-job-titleandco'>
                            <div className='resume-job-title'>Team Lead</div>{' '}
                            <h3>Lambda School</h3>
                        </div>
                        <p>July 2020 – October 2020</p>
                    </div>
                    <ul>
                        <li>
                            Mentored a team of 6 - 8 students to be
                            self-sufficient when solving programming problems.
                        </li>{' '}
                        <li>
                            Provided daily one-on-one feedback and weekly code
                            reviews.
                        </li>
                        <li>
                            {' '}
                            Served as a project lead, keeping students organized
                            and on task for multiple cross-functional build week
                            projects.
                        </li>
                        <li>
                            Facilitated daily standups to build camaraderie,
                            share best practices, and provide guidance for the
                            week's material
                        </li>
                    </ul>
                </div>
                <div className='resume-each-job'>
                    <div className='resume-job-facts'>
                        <div className='resume-job-titleandco'>
                            <div className='resume-job-title'>
                                Full Stack Web Development Student
                            </div>{' '}
                            <h3>Lambda School</h3>
                        </div>
                        <p>December 2019 – June 2020</p>
                    </div>
                    <ul>
                        <li>
                            Learned several programming languages from the
                            ground up in just 6 months.
                        </li>{' '}
                        <li>
                            Participated in three different build weeks,
                            collaborating in groups of +/- 8 students to
                            successfully develop websites.
                        </li>{' '}
                        <li>
                            Built a{' '}
                            <a href='https://master.d192i0nnd51m2r.amplifyapp.com/' target="_blank">
                                fitness app
                            </a>{' '}
                            in 3 release canvases in a team of 4, using GIT,
                            Postgres, Node.js, and React.js.
                        </li>{' '}
                    </ul>
                </div>
                <div className='resume-each-job'>
                    <div className='resume-job-facts'>
                        <div className='resume-job-titleandco'>
                            <div className='resume-job-title'>
                                Company Owner / Project Manager
                            </div>{' '}
                            <h3>BOSS Entertainment Live</h3>
                        </div>
                        <p>June 2015 – Jan 2020</p>
                    </div>
                    <ul>
                        <li>
                            Hired and managed a team of +/- 20 entertainers,
                            performing at various shows and events across the
                            country.
                        </li>{' '}
                        <li>
                            Fostered team engagement, allowing all team members
                            to feel a sense of ownership and pride.
                        </li>
                        <li>
                            Established and maintained business relationships
                            with clients and partners both locally and out of
                            state.
                        </li>{' '}
                        <li>
                            Managed projects and events such as group costume
                            design, choreographed shows, fundraisers.
                        </li>{' '}
                        <li>
                            Organized and planned multiple projects, delivering
                            on ad hoc client requests in parallel.
                        </li>{' '}
                        <li>
                            Consistently met challenging deadlines with high
                            quality results.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
