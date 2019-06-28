import React from "react"
import GlobalStyle from "../../style/GlobalStyle"
import { Container } from "../../style/grid"
import SideBar from "../../components/SideBar/SideBar"
import NavigationBar from "../../components/NavigationBar/NavigationBar"
import { connect } from "react-redux"
import { toggleWhite, toggleBlack } from "../../redux/modules/actions"
import { withRouter } from "react-router"
import { ThemeProvider } from "styled-components"
import { SwitchButton, SwitchButtonContainer, SVGContainer } from "./App.style"

const mapDispatchToProps = dispatch => {
  return {
    toggleWhite: () => dispatch(toggleWhite),
    toggleBlack: () => dispatch(toggleBlack)
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const App = props => {
  const [theme, setTheme] = React.useState({
    name: "black",
    background: "black",
    color: "white"
  })

  const switchTheme = e => {
    if (theme.name === "black") {
      const newTheme = {
        name: "white",
        background: "white",
        color: "black"
      }
      setTheme(newTheme)
      // theme = Object.assign({}, newTheme)
    } else {
      const newTheme = {
        name: "black",
        background: "black",
        color: "white"
      }
      // theme = Object.assign({}, newTheme)
      setTheme(newTheme)
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <NavigationBar />
          {props.children}
          <SideBar />
          <SwitchButtonContainer>
            <SwitchButton type="checkbox" onClick={switchTheme} />
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
