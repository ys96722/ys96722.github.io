import styled, { css, keyframes } from "styled-components"
import { blue, yellow, fontSize, mint } from "./variables"
import { Div } from "./grid"
import { media } from "./media"
import { Button } from "reactstrap"
import { NavLink } from "react-router-dom"


export const P = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
  line-height: 2rem;
  font-family: avenir;
`

export const PageTitle = styled.h1`
  font-size: 3em;
  text-align: center;
`
/* ${media.phone`
    font-size: 2em;
  `} */

export const PageSubTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
`

 /* ${media.phone`
    font-size: 1.2em;
  `} */

const fadeIn = keyframes`
  0% {
      opacity: 0;
      transform: translateY(50%);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`

interface ITextProps {
  align?: string
  testimonial?: string
}

export const Text = styled.p<ITextProps>`
  font-size: 0.85em;
  animation: 1s ease-in-out 0s 1 ${fadeIn};
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  height: auto;
  text-align: ${props => props.align};
  font-family: avenir;

  ${({ testimonial }) =>
    testimonial &&
    css`
        font-size: 0.7em;
        &::before {
            content: open-quote;
        }
        &::after {
            content: close-quote;
        }
    `} 
`

interface IAProps {
  fontColor?: string
}

export const A = styled.a<IAProps>`
    font-size: inherit;
    color: ${blue};
    text-decoration: none;
    position: relative;
    z-index: 1;

    &::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10%;
        width: 100%;
        background-color: ${blue};
        z-index: -1;
        transition: height 0.2s;
    }

    &:hover::after {
        height: 40%;
        background-color: ${yellow};
    }

    ${
      (props) => {
        if (props && props.fontColor) {
          return css`
             color: ${props.fontColor};

            &::after {
                content: " ";
                position: absolute;
                left: 0;
                bottom: 0;
                height: 10%;
                width: 100%;
                background-color: ${props.fontColor};
                z-index: -1;
                transition: height 0.2s;
            }
          `
        } else {
          return css``
        }
      }
    }
`

interface INavButtonProps {
  direction?: string
}

export const NavButton = styled(A)<INavButtonProps>`
    position: absolute;
    bottom: 0;
    font-size: 1.4em;
    height: auto;
    width: auto;
    width: -webkit-fit-content;
    margin: auto;
    
    :hover {
      cursor: pointer;
    }

    ${(props) => {
      if (props.direction === 'left') {
        return css`
        left: 0;
        `
      } else {
        return css`
        right: 0;
        `
      }
    }}
`

export const BottomDiv = styled(Div)`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  justify-self: end;
  /* margin-top: auto; */
  /* margin-top: 100px; */
`

export const OpenButton = styled.button`
  font-size: ${fontSize};
  color: ${blue};
  text-decoration: none;
  position: relative;
  background-color: transparent;
  border: none;

  &::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${blue};
    z-index: -1;
    transition: height 0.2s;
  }

  &:hover::after {
    height: 40%;
    background-color: ${yellow};
  }
`

export const CloseButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 10px;
    border-color: transparent;

    font-size: 1.5rem;
    transition: font-size 0.1s linear;
    background-color: rgba(0, 0, 0, 0.8);
    transition: background-color 0.1s linear;
    color: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-in-out;

    &:hover {
        font-size: 1.8rem;
        background-color: rgba(0, 0, 0, 0.79);
        color: ${blue};
    }
`
