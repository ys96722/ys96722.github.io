import React, { Component } from "react";
import GlobalStyle from "../../style/GlobalStyle";
// import { Background } from "./App.style";
import { Container } from "../../style/grid";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ReallySmoothScroll from "really-smooth-scroll";
import { hashHistory } from "react-router";
// Importing Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'

library.add(faTree)

// All I Got

hashHistory.listen(() => {
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <Background /> */}
        <Container>
          <NavigationBar />
          {this.props.children}
        </Container>
      </>
    );
  }
}

export default App;
