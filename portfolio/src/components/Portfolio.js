import React from "react";
import ui from "./images/ui.png";
import refresh from "./images/refresh.png";
import "../App.css";


function AboutMe() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <a href="https://build-week-airbnb-optimal-price-4.github.io/user-interface/">
          <img src={ui} />
          Landing Page and About Page
        </a>
        <p>Tech Stack: HTML, CSS, Less? </p>
        <p>
          github:
          https://github.com/Build-Week-Airbnb-Optimal-Price-4/user-interface
        </p>
      </div>
      <div>
        <a href="https://www.refresh-app.com/">
          <img src={refresh} />
          Wellness Tracker App
        </a>
        <p>Tech Stack: React, Redux, Node</p>
        <p>github-frontend: https://github.com/Lambda-School-Labs/refresh-fe</p>
        <p>github-backend: https://github.com/Lambda-School-Labs/refresh-be</p>
      </div>
    </div>
  );
}

export default AboutMe;
