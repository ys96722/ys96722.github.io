import styled from "styled-components";
import { blue, yellow, black } from "./variables";

export const A = styled.a`
  color: ${blue};
  text-decoration: none;
  position: relative;

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
`;

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
