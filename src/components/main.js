import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landing/landingPage';
import AboutMe from './About/aboutMe';
import Contact from './Contact/contact';
import Projects from './Projects/projects';
import Resume from './Resume/resume';




const Main = () => (
  <Switch>
    <Route exact path="/mw" component={LandingPage} />
    <Route path="/aboutMe" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
