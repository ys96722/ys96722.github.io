import styled, { css } from "styled-components";

export const MableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: yellow;
`;

export const Square = styled.div`
  position: relative;
  background-color: blue;
  display: block;
  color: yellow;
  width: 12.5%;
  height: 50px;
  border: 5px solid black;
`;

export const Row = styled.div`
  align-self: flex-start;
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const EndRow = styled.div`
  align-self: flex-end;
  display: flex;
  width: 100%;
  margin-top: auto;
  flex-direction: row;
`;
