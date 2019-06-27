import React, { Component } from "react"
import GlobalStyle from "../../style/GlobalStyle"
import { Container } from "../../style/grid"
import SideBar from "../../components/SideBar/SideBar"
import NavigationBar from "../../components/NavigationBar/NavigationBar"
import { connect } from "react-redux";
import { changeColor } from "../../redux/modules/actions"
import { withRouter } from 'react-router';

const mapDispatch = dispatch => {
  return {
    changeColor: () => dispatch(changeColor())
  };
}

const mapState = state => {
  return { toggleWhite: state.toggleWhite };
};

class App extends Component {
  state = {
    bgColor: "black"
  }

  

  handleClick = e => {
    if (this.state.bgColor === "black") {
      this.setState({
        bgColor: "white"
      })
    } else {
      this.setState({
        bgColor: "black"
      })
    }
  }
  render(){
      return (
      <>
        <GlobalStyle />
        <Container bgColor={this.state.bgColor}>
          <NavigationBar/>
          {this.props.children}
          <SideBar />
          <button onClick={this.handleClick}>Hi</button>
        </Container>
      </>
    )
  }
}

export default withRouter(connect(mapState, mapDispatch)(App));

