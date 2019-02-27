import React, { Component } from "react";
import GlobalStyle from "../../style/GlobalStyle";
// import { Background } from "./App.style";
import { Container } from "../../style/grid";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ReallySmoothScroll from "really-smooth-scroll";
import { hashHistory } from "react-router";
import LoadingPage from '../Loader/LoadingPage';

// All I Got

hashHistory.listen(() => {
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    const { loading, doneLoading } = this.props;
    const { waitingToFinishLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        {/* <Background /> */}
        <Container>
          <NavigationBar />
          <LoadingPage loading={waitingToFinishLoading && loading} />
          {this.props.children}
        </Container>
      </>
    );
  }
}

export default App;
