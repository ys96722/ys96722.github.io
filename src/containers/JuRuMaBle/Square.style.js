import styled, { css } from "styled-components";
import { green } from "../../style/variables";

const katalkGreen = "#86D1D6";

export const SquareContainer = styled.div`
  position: relative;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${100 / 12}%;
  height: 100%;
  /* border: 2px dotted black; */
  outline: 1px solid black;
  z-index: 1;
  text-align: center;

  h1 {
    font-size: 1.3rem;
    color: ${props => props.fontColor};
    ${({ form }) =>
      form &&
      css`
        font-size: 0.8rem;
      `}

    ${({ backTrack }) =>
      backTrack &&
      css`
        font-size: 2rem;
      `}
  }
`;
