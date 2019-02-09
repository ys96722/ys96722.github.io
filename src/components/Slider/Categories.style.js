import styled from "styled-components";
import { Flex, Div } from "../../style/grid";
import { blue, yellow, red, black } from "../../style/variables";
import { css } from "styled-components";

export const CategoriesContainer = styled(Flex)`
  position: relative;
  /* right: 2em;
  top: 1.8em; */
  z-index: 100;
`;

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
