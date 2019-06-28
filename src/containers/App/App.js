import React from "react"
import GlobalStyle from "../../style/GlobalStyle"
import { Container } from "../../style/grid"
import SideBar from "../../components/SideBar/SideBar"
import NavigationBar from "../../components/NavigationBar/NavigationBar"
import { connect } from "react-redux"
import { toggleWhite, toggleBlack } from "../../redux/modules/actions"
import { TOGGLE_WHITE, TOGGLE_BLACK } from "../../redux/app-const"
import { withRouter } from "react-router"
import { ThemeProvider } from "styled-components"
import { SwitchButton, SwitchButtonContainer } from "./App.style"

const mapDispatchToProps = dispatch => {
  return {
    // toggleWhite: () => dispatch({ type: TOGGLE_WHITE }),
    toggleWhite: () => dispatch({ type: TOGGLE_WHITE }),
    toggleBlack: () => dispatch({ type: TOGGLE_BLACK })
  }
}

const mapStateToProps = state => {
  return {
    theme: state.app.theme
  }
}

const App = props => {
  const handleClick = e => {
    if (props.theme.name === "black") return props.toggleWhite()
    else {
      return props.toggleBlack()
    }
  }
  return (
    <ThemeProvider theme={props.theme}>
      <>
        <GlobalStyle />
        <Container>
          <NavigationBar />
          {props.children}
          <SideBar />
          <SwitchButtonContainer>
            <SwitchButton type="checkbox" onClick={handleClick} />
          </SwitchButtonContainer>
        </Container>
      </>
    </ThemeProvider>
  )
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
