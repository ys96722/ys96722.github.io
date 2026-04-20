import { createGlobalStyle } from "styled-components"
import { black } from "./variables"

const GlobalStyle = createGlobalStyle`

  /* Import Fonts*/
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  html {
    scroll-behavior: smooth;
  }

  ::-moz-selection {
    background-color: ${black};
    color: white;
  }
  ::-webkit-selection {
    background-color: ${black};
    color: white;
  }
  ::selection {
    background-color: ${black};
    color: white;
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:focus{
    outline: none;
  }

  body, button{
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      color: ${black};
      background-color: ${props => props.theme.background};
      transition: background 0.5s;
  }


`

export default GlobalStyle
