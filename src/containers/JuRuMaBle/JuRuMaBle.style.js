import styled, { css } from "styled-components";

export const MableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
`;

export const Row = styled.div`
  align-self: flex-start;
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: row;
`;

export const Filler = styled.div`
  display: flex;
  width: ${100 / 12}%;
  /* flex-grow: 1; */
`;

