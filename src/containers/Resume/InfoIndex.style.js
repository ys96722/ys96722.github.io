import styled, { css } from "styled-components";
import { Div, Flex } from "../../style/grid";

export const InfoIndexContainer = styled(Flex)`
  position: fixed;
  flex-direction: column;
  right: 2em;
  top: 50%;
  z-index: 98;
  /* background-color: black; */
`;

export const InfoIndexRow = styled(Flex)`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`;
