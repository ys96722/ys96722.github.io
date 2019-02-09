// Importing Dependencies
import React from "react";
import { Route, Router, IndexRoute, hashHistory } from "react-router";

// Importing Components
import App from "./containers/App/App";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import About from "./containers/About/About";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);
