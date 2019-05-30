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
  bottom: 125%;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.7);
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  /* white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal; */
  padding: 10px;
  font-size: 30px;
  border-radius: 10px;

  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  /* display: none; */
  display: block;
  opacity: 0;

  &::after {
    position: absolute;
    top: 100%;
    left: 50%;
    border-top: 7px solid #000;
    border-top: 7px solid hsla(0, 0%, 20%, 0.9);
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    content: " ";
    font-size: 0;
    line-height: 0;
  }

  ${({ hover }) =>
    hover &&
    css`
      display: block;
      opacity: 1;
    `}

  p {
    font-size: 1.5rem;
    color: white;
    display: inline-block;
    width: 100%;
  }
`;
