import styled, { css } from "styled-components";
import { Flex } from "../../style/grid";
import { A, P, Text } from "../../style/types";
import { black, blue, paddingValue } from "../../style/variables";
import { media } from "../../style/media";
// import { blue, yellow } from "../../style/variables";

// Covers the whole screen
export const PopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* border-radius: 10px; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;

  ${Text} {
    @media (max-width: 450px) {
      font-size: 0.7em;
    }
  }
`;
// Isolates the content area
export const PopupInner = styled(Flex)`
  position: absolute;
  border-radius: 10px;
  flex-direction: row;
  /* Height has to be 1.6 times bigger than width */
  /* Width has to be 0.625 times smaller than height */
  /* left: 25%;
  right: 25%;
  top: 10%;
  bottom: 10%; */
  left: 5%;
  right: 5%;
  top: 10%;
  bottom: 10%;
  margin: auto;
  background: white;
  overflow: hidden;
`;
// Left Half
export const PopupImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  height: 100%;
  width: 65%;
  border-right: 2px solid rgba(0, 0, 0, 0.5);

  @media (max-width: 1150px) {
    display: none;
  }
`;
// Right Half
export const PopupContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
  text-align: center;
  padding: ${paddingValue};
  white-space: pre-wrap;

  ${P} {
    font-size: 1.6rem;
    line-height: 1.5rem;
  }

  ${Flex} {
    margin-top: 10%;

    /* @media (max-width: 450px) {
      width: 75%;
    } */
  }

  span ${A} {
    font-size: 1.8rem;
  }

  @media (max-width: 1150px) {
    width: 100%;
  }

  /* @media (max-width: 450px) {
    padding: 4rem;
  } */
/* 
  ${media.tablet`
    width: 100%;
  `}
  ${media.phone`
    
  `} */
`;

// export const TextContainer = styled(Flex)`
//   min-height: 400px;
//   margin-top: auto;
//   margin-bottom: auto;
//   overflow: visible;
// `;

export const Title = styled.h1`
  white-space: nowrap;
  ${({ fontColor }) =>
    fontColor &&
    css`
      color: ${fontColor};
    `}
`;

export const Button = styled.button`
  /* background-color: ${black}; */
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
  /* border: 2px solid black; */
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  /* color: white; */
  color: ${blue};
  /* padding: 15px 32px; */
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-decoration: underline;
  /* z-index: 101; */
  /* font-size: 30px; */
  /* transition: padding 0.2s ease-in-out; */

 
  z-index: 1;

  &:hover {
    text-decoration: none;
    background-color: ${props => props.fontColor};
    color: white;
  }

 
  ${({ fontColor }) =>
    fontColor &&
    css`
      color: ${fontColor};
      /* background-color: black;
      color: white; */
    `}
  ${({ active }) =>
    active &&
    css`
      background-color: ${props => props.fontColor};
      color: white;
      text-decoration: none;
      /* background-color: black;
      color: white; */
    `}

  @media (max-width: 450px) {
    font-size: 1.0em !important; 
  }
`;

// export const PopupFooter = styled.div`
//   margin-top: auto;
//   position: relative;
//   font-size: 1.3rem;
//   /* align-self: flex-end; */
//   /* justify-self: flex-end; */
//   width: 100%;
//   -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
//   -moz-box-sizing: border-box; /* Firefox, other Gecko */
//   box-sizing: border-box; /* Opera/IE 8+ */
//   display: flex;
//   bottom: ${paddingValue};
//   flex-direction: column;
// `;

// export const People = styled.p`
//   position: relative;
//   margin-top: 1.5rem;
//   text-align: left;
// `;
