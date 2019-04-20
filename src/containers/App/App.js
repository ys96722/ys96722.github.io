import React, { Component } from "react";
import GlobalStyle from "../../style/GlobalStyle";
// import { Background } from "./App.style";
import { Container } from "../../style/grid";
import SideBar from "../../components/SideBar/SideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import LoadingPage from "../Loader/LoadingPage";
import {
  registerItem,
  isLoading,
  doneLoading
} from "../../redux/modules/loadingStatus";
import { connect } from "react-redux";
import { withRouter } from "react-router";

export default class App extends Component {
  state = {
    waitingToFinishLoading: true
  };

  // componentDidMount() {
  //   this.props.registerItem("appBackground");
  // }

  componentWillReceiveProps(nextProps) {
    if (this.state.waitingToFinishLoading && !nextProps.loading) {
      this.setState({ waitingToFinishLoading: false });
    }

    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        waitingToFinishLoading: true
      });
    }
  }

  componentDidMount() {
    (() => {
      // "use strict";
      // Page is loaded
      const objects = document.getElementsByClassName("asyncImage");
      Array.from(objects).map(item => {
        // Start loading image
        const img = new Image();
        img.src = item.dataset.src;
        // Once image is loaded replace the src of the HTML element
        img.onload = () => {
          item.classList.remove("asyncImage");
          return item.nodeName === "IMG"
            ? (item.src = item.dataset.src)
            : (item.style.backgroundImage = `url(${item.dataset.src})`);
        };
      });
    })();
  }

  render() {
    const { loading, doneLoading } = this.props;
    const { waitingToFinishLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        {/* <Background /> */}
        {/* {(window.innderWidth <= 760) ? (
          <h1>The website for the smaller viewports is coming soon</h1>
        ) : ( */}
        <Container>
          <NavigationBar />
          {/* <div
            onLoad={({ loading }) => {
              // if (!loading) doneLoading("appBackground");
            }}
          />
          <LoadingPage loading={waitingToFinishLoading && loading} /> */}
          {this.props.children}
          <SideBar />
        </Container>
      </>
    );
  }
}

// export default withRouter(connect(
//   (state) => ({
//     loading: isLoading(state)
//   }),
//   {
//     registerItem, doneLoading
//   }
// )(App));
