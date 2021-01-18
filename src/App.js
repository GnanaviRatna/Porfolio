import './App.css';
import React, { Component } from "react";

//import HomePage from "./components/HomePage";
//import WorkExperience from  "./components/WorkExperience";
//import Projects from "./components/Projects";
import {Routes} from "./routes";
import NavBar from "./components/navbar";
import NavBarTesting from "./components/testing";


class App extends Component {
  //<HomePage/> <WorkExperience/> <Projects/><Routes/>
  render() {
    return (
      <React.Fragment>
        <Routes/>
      </React.Fragment>
      
  
    );
  }
  
}

export default App;
