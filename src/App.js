import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import About from './Components/About';
import LandingPage from './Components/LandingPage';
import ProjectList from './Components/ProjectList';
import SingleProject from './Components/SingleProject';
import NavBar from './Components/NavBar';



function App() {
  return (
    <div className="">
      <div>
          <NavBar/>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={SingleProject} />
        </Switch>
      </div>

    </div>  
    );
}

export default App;
