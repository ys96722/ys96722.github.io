import styled, { css, keyframes } from "styled-components";
import { Flex } from "../../style/grid";
import { A, P } from "../../style/types";
import { black, blue, fontSize, paddingValue } from "../../style/variables";
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
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  ${Flex} {
    margin-top: 10%;
    margin-bottom: 5%;
  }
`;

// export const TextContainer = styled(Flex)`
//   min-height: 400px;
//   margin-top: auto;
//   margin-bottom: auto;
//   overflow: visible;
// `;

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
  /* font-size: 30px; */

  /* transition: padding 0.2s ease-in-out; */



  &:hover {
    text-decoration: underline;
    /* background-color: black; */
  }

  ${({ active }) =>
    active &&
    css`
      text-decoration: underline;
      /* background-color: black;
      color: white; */
    `}
`;

const fadeIn = keyframes`
  0% {
      opacity: 0;
      transform: translateY(50%);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`;

export const Text = styled.p`
  /* margin-top: auto; */
  /* duration, animationType, delayFromLoad, IterationCount, animationName */
  animation: 1s ease-in-out 0s 1 ${fadeIn};
  margin-bottom: auto;
  width: 100%;
  height: auto;
`;

export const PopupFooter = styled.div`
  margin-top: auto;
  position: relative;
  font-size: 1.3rem;
  /* align-self: flex-end; */
  /* justify-self: flex-end; */
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  display: flex;
  bottom: ${paddingValue};
  flex-direction: column;

  ${A} {
    margin-top: 1.5rem;
    align-self: center;
  }
`;

export const People = styled.p`
  position: relative;
  margin-top: 1.5rem;
  text-align: left;
`;
