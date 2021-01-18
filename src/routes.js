import React from 'react';
import { BrowserRouter,Route, Switch, Redirect } from 'react-router-dom';

import Certification from "./components/Certification";
import  HomePage  from "./components/HomePage";
import  WorkExperience from './components/WorkExperience';
import Projects from "./components/Projects";
//import NavBar from "./components/navbar";
import Skills from "./components/Skills";
import AcademicsPage from "./components/AcademicsPage";
import TrailHomePage from "./components/TrailHomePage";


export const Routes = () => {
  //<Route exact path="/testing" component={TrailHomePage} />
  return (
    <div>
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/experience" component={WorkExperience} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/certification" component={Certification} />
        <Route exact path="/achievements" component={AcademicsPage} />
      </Switch>
      </BrowserRouter>
      
    </div>
  );
};