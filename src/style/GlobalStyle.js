import { createGlobalStyle } from "styled-components"
import { black } from "./variables"

const GlobalStyle = createGlobalStyle`

  /* Import Fonts*/
  /* font-family: 'VT323', monospace; */
  @import url('https://fonts.googleapis.com/css?family=VT323');  
  /*
   * {
      padding: 0;
      margin: 0;
      border: 1px solid red !important; 
  } 
  */



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
      font-family: 'VT323', monospace;
      font-size: 20px;
      color: ${black};
      background-color: ${props => props.theme.background};
      /* transition: background-color 1s; */
  }

 
  

`

export default GlobalStyle
