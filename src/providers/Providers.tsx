import React from "react"
import { ThemeProvider } from "styled-components"
import { Provider as StoreProvider } from "react-redux"
import store from "store/index"
import GlobalStyle from "style/GlobalStyle"

const Providers = (props) => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={props.currentTheme}>
          <GlobalStyle />
          {props.children}
      </ThemeProvider>
    </StoreProvider>
  )
}

export default Providers