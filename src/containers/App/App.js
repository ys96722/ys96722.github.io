import React, { Component } from "react";
import GlobalStyle from "../../style/GlobalStyle";
// import { Background } from "./App.style";
import { Container } from "../../style/grid";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
// import LoadingPage from "../Loader/LoadingPage";

class App extends Component {
  // state = {
  //   waitingToFinishLoading: true
  // };

  // // componentDidMount() {
  // //   this.props.registerItem('appBackground');
  // // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.state.waitingToFinishLoading && !nextProps.loading) {
  //     this.setState({ waitingToFinishLoading: false });
  //   }

  //   if (this.props.location.pathname !== nextProps.location.pathname) {
  //     this.setState({
  //       waitingToFinishLoading: true
  //     });
  //   }
  // }

  render() {
    // const { loading, doneLoading } = this.props;
    // const { waitingToFinishLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        {/* <Background /> */}
        <Container>
          <NavigationBar />
          {/* <LoadingPage loading={waitingToFinishLoading && loading} /> */}
          {this.props.children}
        </Container>
      </>
    );
  }
}

export default App;
