import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

import fold from './components/images/portfolio-resume-folder-score-lines.png';
import './App.css';
import './LandingPage.css';

function App() {
    return (
        <div className='landing-page-container'>
            <LandingPage />

            <Header />
       


            <Route exact path='/about-me'>
                <AboutMe />
            </Route>

            <Route exact path='/portfolio'>
                <Portfolio />
            </Route>

            <Route exact path='/contact-me'>
                <ContactMe />
            </Route>
        </div>
    );
}

export default App;
