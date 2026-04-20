import styled, { css } from "styled-components";
import { Div, Flex } from "../../style/grid";

export const InfoIndexContainer = styled(Flex)`
  position: relative;
  flex-direction: column;
  z-index: 98;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoIndexRow = styled(Flex)`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`;
