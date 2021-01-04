import React from 'react';
import { Route } from 'react-router-dom';
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
            {/* <img className="portfolio-fold" src={fold}/>
      <img className="portfolio-fold" src={fold}/> */}
            <div className='name-info-container'>
                <h1 className='front-title'>FULL-STACK WEB DEVELOPER</h1>
                <h1 className='front-name name-info'>ALEXIS VILLARAZA</h1>
                <h1 className='name-info'>480-703-7967</h1>
                <h1 className='name-info'>alexis.borja@gmail.com</h1>
            </div>

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
