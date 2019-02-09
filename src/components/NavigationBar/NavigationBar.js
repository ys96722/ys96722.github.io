import React, { Component } from "react";
import {
  NavigationContainer,
  NavigationItem,
  IndexNavigationItem
} from "./NavigationBar.style";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <NavigationContainer>
        <IndexNavigationItem
          to="/"
          title="Home"
          activeClassName="activeIndexItem"
        />
        <NavigationItem
          to="/projects"
          title="Projects"
          activeClassName="activeNavItem"
        />
        <NavigationItem
          to="/about"
          title="About"
          activeClassName="activeNavItem"
        />
      </NavigationContainer>
    );
  }
}

export default NavigationBar;
