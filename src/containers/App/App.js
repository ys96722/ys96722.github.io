import React, { Component } from "react";
import GlobalStyle from "../../style/GlobalStyle";
// import { Background } from "./App.style";
import { Container } from "../../style/grid";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ReallySmoothScroll from "really-smooth-scroll";
import { hashHistory } from "react-router";

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
