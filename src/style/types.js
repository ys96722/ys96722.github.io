import styled from "styled-components";
import { blue, yellow, black, fontSize } from "./variables";
import { Button } from "reactstrap";


export const A = styled.a`
  font-Size: ${fontSize};
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
`;

export const OpenButton = styled.button`
  font-Size: ${fontSize};
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
  border-radius: 10px;
  border-color: transparent;

  font-size: 1.5rem;
  transition: font-size 0.1s linear;
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color 0.1s linear;
  color: rgba(255, 255, 255, 1);
  transition: color 0.1s linear;

  &:hover {
    font-size: 1.8rem;
    background-color: rgba(0,0,0,0.79);
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
