import React, { Component } from "react"
import {
  NavigationContainer,
  NavigationItem,
  IndexNavigationItem,
  ItemDiv
} from "./NavigationBar.style"

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <ItemDiv>
          <IndexNavigationItem to="/" activeClassName="activeIndexItem">
            <span>{"{"}</span> Home <span>{"}"}</span>
          </IndexNavigationItem>
        </ItemDiv>
        <ItemDiv>
          <NavigationItem to="/projects" activeClassName="activeNavItem">
            <span>{"{"}</span> Projects <span>{"}"}</span>
          </NavigationItem>
        </ItemDiv>
        <ItemDiv>
          <NavigationItem to="/resume" activeClassName="activeNavItem">
            <span>{"{"}</span> Résumé <span>{"}"}</span>
          </NavigationItem>
        </ItemDiv>
        {/* <NavigationItem
          to="/jurumable"
          title="주루마블"
          activeClassName="activeNavItem"
        /> */}
      </NavigationContainer>
    )
  }
}

export default NavigationBar
