import React, { Component } from "react"
import GlobalStyle from "../../style/GlobalStyle"
// import { Background } from "./App.style";
import { Container } from "../../style/grid"
import { BottomDiv, NavButton } from "../../style/types"
import SideBar from "../../components/SideBar/SideBar"
import NavigationBar from "../../components/NavigationBar/NavigationBar"
// import LoadingPage from "../Loader/LoadingPage";
// import {
//   registerItem,
//   isLoading,
//   doneLoading
// } from "../../redux/modules/loadingStatus";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";

export default class App extends Component {
  state = {
    waitingToFinishLoading: true
  }

  // componentDidMount() {
  //   this.props.registerItem("appBackground");
  // }

  componentWillMount = () => {
    console.log(
      "Hello there! If you are looking at my website's console, I am assuming that you are here to look for an error. If you find any bug or notice any possible improvements, please kindly do let me know, and I would really appreciate it! Thank you, and have a nice day :D"
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.waitingToFinishLoading && !nextProps.loading) {
      this.setState({ waitingToFinishLoading: false })
    }

    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        waitingToFinishLoading: true
      })
    }
  }

  render() {
    // const { loading, doneLoading } = this.props;
    // const { waitingToFinishLoading } = this.state;
    let bgColor = "black"
    // let bottomContent = [
    //   <BottomDiv>
    //     <NavButton href="#projects" direction="right">
    //       Projects >>
    //     </NavButton>
    //   </BottomDiv>,
    //   <BottomDiv>
    //     <NavButton href="#" direction="left">
    //       &lt;&lt; Home
    //     </NavButton>
    //     <NavButton href="#resume" direction="right">
    //       Resume &gt;&gt;
    //     </NavButton>
    //   </BottomDiv>,
    //   <BottomDiv>
    //     <NavButton
    //       href="#projects"
    //       direction="left"
    //       onClick={e => this.handleClick("Projects Link at the Bottom")}
    //     >
    //       &lt;&lt; Projects
    //     </NavButton>
    //   </BottomDiv>
    // ]
    // let pageIndex = 0
    let currentPage = this.props.location.pathname
    if (this.props.location.pathname === "/") {
      bgColor = "black"
      // pageIndex = 0
    } else if (this.props.location.pathname === "/projects") {
      bgColor = "white"
      // pageIndex = 1
    } else if (this.props.location.pathname === "/resume") {
      bgColor = "white"
      // pageIndex = 2
    }
    return (
      <>
        <GlobalStyle />
        {/* <Background /> */}
        {/* {(window.innderWidth <= 760) ? (
          <h1>The website for the smaller viewports is coming soon</h1>
        ) : ( */}
        <Container bgColor={bgColor}>
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
    )
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
