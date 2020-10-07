import React from "react";
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
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
