import styled from "styled-components";
import { blue, yellow, black } from "./variables";
import { Button } from "reactstrap";

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

export const OpenButton = styled.button`
  font-size: 1.5rem;
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
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 1);
  transition: color 0.1s linear;

  &:hover {
    color: ${blue};
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
