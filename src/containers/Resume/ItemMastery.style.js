import styled, { css } from "styled-components";
import { Flex } from "../../style/grid";

export const MasteryContainer = styled(Flex)`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Tooltip = styled(Flex)`
  position: absolute;
  right: 10%;
  bottom: 125%;
  border: 1px solid black;
  background-color: white;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 30px;
  border-radius: 10px;

  display: none;

  &::after {
    position: absolute;
    right: 10%;
    bottom: 115%;
    width: 0;
    border-top: 5px solid #000;
    border-top: 5px solid hsla(0, 0%, 20%, 0.9);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: " ";
    font-size: 0;
    line-height: 0;
  }

  ${({ hover }) =>
    hover &&
    css`
      display: block;
    `}

  h1 {
    display: inline-block;
  }
`;
