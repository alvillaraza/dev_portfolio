import React from 'react';


// import fold from './components/images/portfolio-resume-folder-score-lines.png';
// import './App.css';
// import './LandingPage.css';

function LandingPage() {
    return (
        <div className='landing-page-container'>
 
            {/* <img className="portfolio-fold" src={fold}/>
      <img className="portfolio-fold" src={fold}/> */}
            <div className='name-info-container'>
                <h1 className='front-title'>FULL-STACK <p>WEB DEVELOPER</p></h1>
                <h1 className='front-name name-info'>ALEXIS VILLARAZA</h1>
                <h1 className='name-info'>480-703-7967</h1>
                <h1 className='name-info'>alexis.borja@gmail.com</h1>
            </div>

        </div>
    );
}

export default LandingPage;