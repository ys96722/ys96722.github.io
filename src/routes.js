// Importing Dependencies
import React from "react";
import { Route, Router, IndexRoute, hashHistory } from "react-router";

// Importing Components
import App from "./containers/App/App";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import Resume from "./containers/Resume/Resume";
// import JuRuMaBle from "./containers/JuRuMaBle/JuRuMaBle";
import ReactGA from "react-ga";

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

export default (
  <Router onUpdate={fireTracking} history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      {/* <Route path="/jurumable" component={JuRuMaBle} /> */}
    </Route>
  </Router>
);
