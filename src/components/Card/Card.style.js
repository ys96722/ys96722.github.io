import styled, { css } from "styled-components";
import {
  blue,
  red,
  lightblue,
  yellow,
  green,
  lightgreen
} from "../../style/variables";
import { A, OpenButton } from "../../style/types";

// BEGIN CONSTANTS
const paddingValue = "2rem";
// END CONSTANTS

export const Inner = styled.div`
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  /* height: 100%; */
  padding: ${paddingValue};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
  /* background-color: black; */
  /* opacity: 0.6; */
`;

export const CardFront = styled.div`

  /* ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `} */

  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 320px;
  max-height: 380px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
  
  &::before {
    content: "";
    position: absolute;
    left: 0; 
    right: 0;
    top: 0; 
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
    z-index:2;
    border-radius: 10px;
  }

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
    ${({ bgSize }) =>
      bgSize &&
      css`
        background-size: ${bgSize};
      `}
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
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
    /* font-weight: 300; */
    font-weight: 400;
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
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 320px;
  max-height: 380px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;

  /* background: #cedce7;
  background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: linear-gradient(45deg, #cedce7 0%, #596a72 100%); */

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  ${Inner} {
    -webkit-transform: translateY(0%) translateZ(60px) scale(0.94);
    transform: translateY(0%) translateZ(60px) scale(0.94);
    /* top: 50%; */
    /* position: absolute; */
    height: 100%;
    top: 0;
    text-align: left;

    ${A}, ${OpenButton} {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      bottom: ${paddingValue};
    }
    /* left: 0; */
    /* width: 100%; */
    /* height: 100%; */
    /* padding: 2rem; */
    /* -webkit-box-sizing: border-box; */
    /* box-sizing: border-box; */
    /* outline: 1px solid transparent; */
    /* -webkit-perspective: inherit; */
    /* perspective: inherit; */
    /* z-index: 2; */
  }
`;

export const CardContainer = styled.div`
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  max-width: 450px;

  ${({ cardWidth }) =>
    cardWidth &&
    css`
      width: calc(${cardWidth}%);
    `}
  /* width: calc(31%); */
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* border-color: black;
  border-width: 1rem; */

  &:hover ${CardFront}, ${CardBack} {
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
  }

  /* Figure out how to do descendent selectors */
  /* & > p {
    font-color: red;
  } */
`;
