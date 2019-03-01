import styled, { css } from "styled-components";

export const SquareContainer = styled.div`
  position: relative;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${100/12}%;
  height: 100%;
  border: 5px solid black;
  z-index: 1;
`;