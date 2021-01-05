import React from 'react';

import fold from './images/portfolio-resume-folder-score-lines.png';
// import './App.css';
// import './LandingPage.css';

function LandingPage() {
    return (
        <div className='landing-page-container'>
            {/* <img className="portfolio-fold" src={fold}/>
      <img className="portfolio-fold" src={fold}/> */}
            <div className='name-info-container'>
                <h1 className='front-title'>
                    <span>FULL-STACK</span> <p>WEB DEVELOPER</p>
                </h1>
                <h2 className='front-name name-info'>ALEXIS VILLARAZA</h2>
                <h2 className='name-info'>480-703-7967</h2>
                <h2 className='name-info email'>alexis.borja@gmail.com</h2>
            </div>
        </div>
    );
}

export default LandingPage;
