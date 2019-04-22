import styled, { css, keyframes } from "styled-components";
import {
  blue,
  red,
  lightblue,
  yellow,
  black,
  // green,
  lightgreen,
  paddingValue,
  fontSize
} from "../../style/variables";
import { A, OpenButton } from "../../style/types";
import { media } from "../../style/media";
// import { InnerSubscriber } from "rxjs/internal/InnerSubscriber";

const zoomIn = keyframes`
  
`;
const fadeIn = keyframes`
  0% {
      opacity: 0;
      /* transform: translateY(50%); */
  }
  100% {
      opacity: 1;
      /* transform: translateY(0); */
  }
`;

export const Inner = styled.div`
  /* -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94); */
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: ${paddingValue};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;

  /* ${media.tablet`
    padding: 10px;
  `}
  ${media.phone`
    padding: 5px;
  `} */
  

  
`;

export const CardFront = styled.div`

  /* -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden; */
  text-align: center;
  min-height: 320px;
  max-height: 380px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: ${fontSize};
  /* &::before {
    content: "";
    position: absolute;
    left: 0; 
    right: 0;
    top: 0; 
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
    z-index:2;
    border-radius: 10px;
  } */

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background-image: url(${props => props.imgPath});
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    /* background-color: #f0eeee; */
    overflow: hidden;

    ${({ bgSize }) =>
      bgSize &&
      css`
        background-size: ${bgSize};
      `}
    /* -webkit-backface-visibility: hidden;
    backface-visibility: hidden; */
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    border-radius: 10px;
    /* border: 2px solid ${black}; */

  }

  ${Inner} p {
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }

  ${Inner} p &::after {
    content: "";
    width: 4rem;
    height: 2px;
    position: absolute;
    background: #c6d4df;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -0.75rem;
  }

  ${Inner} span {
    color: rgba(255, 255, 255, 0.7);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 400;
    -webkit-transition: color 0.4s;
    transition: color 0.4s;

    ${({ tool }) =>
      tool === "WordPress" &&
      css`
        color: ${lightblue};
      `}

    ${({ tool }) =>
      tool === "React" &&
      css`
        color: ${red};
      `}

    ${({ tool }) =>
      tool === "Python" &&
      css`
        color: ${yellow};
      `}

    ${({ tool }) =>
      tool === "Unity" &&
      css`
        color: ${lightgreen};
      `}

  }
`;

export const CardBack = styled.div`
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  /* -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden; */
  text-align: center;
  min-height: 320px;
  max-height: 380px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: ${fontSize};
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: 0.2s ease-in-out 0s 1 ${fadeIn};
  ${Inner} {
    /* -webkit-transform: translateY(0%) translateZ(60px) scale(0.94);
    transform: translateY(0%) translateZ(60px) scale(0.94); */
    height: 100%;
    top: 0;
    text-align: center;
    white-space: pre-wrap;

    h3 {
      margin-bottom: 1rem;

      > span {
        color: ${blue};
        text-decoration: none;
        position: relative;
        z-index: 1;
      }
    }

    p {
      text-align: left;
      margin: 0 auto;
      line-height: 1.8rem;
    }

    ${A}, ${OpenButton} {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      bottom: ${paddingValue};
    }
  }
`;

export const CardContainer = styled.div`
  position:relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  max-width: 450px;
  overflow: hidden;
  border-radius: 10px;
  /* ${({ cardWidth }) =>
    cardWidth &&
    css`
      width: calc(${cardWidth}%);
    `} */
  width: 32%;

  @media (max-width: 1200px) { 
    width: 48%; 
    margin-left: 1%;
    margin-right: 1%;
  }
  @media (max-width: 800px) {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    cursor: pointer;
  }

  /* margin-left: 1rem;
  margin-right: 1rem; */
  margin-left: 0.5%;
  margin-right: 0.5%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* box-shadow: 8px 8px 8px 8px rgba(163,170,175,0.5); */
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);

  &:hover {
    ${CardFront} {
      /* display: none; */
      &::after {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        /* opacity: 0; */
      }
    }

    ${CardBack} {
      display: block;
      /* z-index: 100; */
    }
  }

  /* &:hover ${CardFront}, ${CardBack} {
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
      -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  ${CardBack} {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  ${CardFront} {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  &:hover ${CardBack} {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  &:hover ${CardFront} {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    ${Inner} span {
      color: white;
    }
  } */
`;
