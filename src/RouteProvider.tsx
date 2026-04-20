// Importing Dependencies
import React from "react"
import { Route, Router, IndexRoute, hashHistory } from "react-router"

// Importing Components
import App from "./App"
import Home from "./views/Home/Home"
import Projects from "./views/Projects/Projects"
import Resume from "./views/Resume/Resume"
import JuRuMaBle from "./views/JuRuMaBle/JuRuMaBle"
// import JuRuMaBle from "./containers/JuRuMaBle/JuRuMaBle";

interface IRouteProvider extends React.PropsWithChildren{}

const RouteProvider: React.FC<IRouteProvider> = ({ children }) => { 
  return (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/jurumable" component={JuRuMaBle} />
    </Route>
  </Router>
)}

export default RouteProvider