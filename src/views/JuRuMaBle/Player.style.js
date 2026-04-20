import styled, { css, keyframes } from "styled-components";

// const rotate = keyframes`

//   0%   {opacity:1; }
//   25%  {opacity:0.75;}
//   50%  {opacity:0.5;}
//   75%  {opacity:0.75;}
//   100% {opacity:1; }

//   /* from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   } */
// `;

const slideInFromLeft = keyframes` 
  /* 0% {
    transform: translateX(-100);
  }
  100% {
    transform: translateX(0);
  } */
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const PlayerContainer = styled.div`
  align-self: center;
  justify-self: middle;
  /* margin-top: auto; */
  position: relative;
  animation: 2s ease-out 0s 1 ${slideInFromLeft};
  /* background-color: red; */
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
  display: flex;
  width: 20%;
  height: 20%;
  /* border: 5px solid red; */
  border-radius: 10px;
  z-index: 2;
`;
