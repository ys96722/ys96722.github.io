import styled, { css } from "styled-components";
import {
  yellow,
  red,
  blue,
  black,
  section_header,
  title_header,
  subtitle_header
} from "../../style/variables";

export const Button = styled.button`
  background-color: ${black};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;

  &:hover {
    /* background-color: ${blue}; */
    background-color: black;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: black;
      color: white;
    `}
`;

/* 
export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  h1 {
    font-size: ${section_header};
    font-weight: bold;
    color: ${yellow};
    opacity: 0.6;
    transform: translateY(20%);
  }
`;

export const ImageContainer = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`; */
