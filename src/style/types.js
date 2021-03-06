import styled, { css, keyframes } from "styled-components"
import { blue, yellow, fontSize, mint } from "./variables"
import { Div } from "./grid"
import { media } from "./media"
import { Button } from "reactstrap"

export const P = styled.p`
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; */
  /* font-family: Elena; */
  font-size: 1.3rem;
  margin-top: 1rem;
  line-height: 2rem;
  font-family: avenir;
`

export const PageTitle = styled.h1`
  font-size: 3em;
  text-align: center;
/* 
  ${media.tablet`
    position: relative;
    bottom: 0;
    width: fit-content;
    height: auto;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  `} */

  ${media.phone`
    font-size: 2em;
  `}
`

export const PageSubTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;

  ${media.phone`
    font-size: 1.2em;
  `}
`

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

export const Text = styled.p`
  /* margin-top: auto; */
  /* duration, animationType, delayFromLoad, IterationCount, animationName */
  /* font-size: 1.4rem; */
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
    `} /* a {
    font-size: inherit;
  } */
`

export const A = styled.a`
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

  ${({ fontColor }) =>
    fontColor &&
    css`
      color: ${fontColor};

      &::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10%;
        width: 100%;
        background-color: ${fontColor};
        z-index: -1;
        transition: height 0.2s;
      }
    `}
`

export const NavButton = styled(A)`
  position: absolute;
  bottom: 0;
  font-size: 1.4em;
  height: auto;
  width: auto;
  width: -webkit-fit-content;
  margin: auto;
  /* color: ${mint}; */
  ${({ direction }) =>
    direction === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
`

export const BottomDiv = styled(Div)`
  /* position: relative; */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  margin-top: 100px;
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

// export const P = styled.p`
//   color: white;
//   text-decoration: none;
//   position: relative;

//   &:after {
//     content: " ";
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     height: 10%;
//     width: 100%;
//     background-color: ${blue};
//     z-index: -1;
//     transition: height 5s background-color 5s;
//   }

//   &:hover:after {
//     height: 40%;
//     background-color: ${yellow};
//   }
// `;
