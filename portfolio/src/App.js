import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

// import fold from './components/images/portfolio-resume-folder-score-lines.png';
import './App.css';
import './LandingPage.css';

function App() {
    return (
        <div className='app-container'>
           
                <Route exact path='/'>
                    <LandingPage />
                </Route>

                <Route path='/about-me'>
                    <AboutMe />
                </Route>

                <Route exact path='/resume'>
                    <Resume />
                </Route>
                <Route exact path='/portfolio'>
                    <Portfolio />
                </Route>

                <Route exact path='/contact-me'>
                    <ContactMe />
                </Route>
            
            <Header />
        </div>
    );
}

export default App;
