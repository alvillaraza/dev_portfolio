import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Alexis Villaraza</h1>
      <h3>Full Stack Web Developer</h3>
      <Route exact path="/aboutme"><AboutMe /></Route>
      
      <Route exact path="/portfolio"><Portfolio /></Route>
    </div>
  );
}

export default App;
