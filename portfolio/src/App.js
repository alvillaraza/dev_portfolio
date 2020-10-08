import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="front-name">Alexis Villaraza</h1>
      <h3 className="front-title">Full Stack Web Developer</h3>
      <Route exact path="/about-me"><AboutMe /></Route>
      
      <Route exact path="/portfolio"><Portfolio /></Route>

      <Route exact path="/contact-me"><ContactMe/></Route>
    </div>
  );
}

export default App;
