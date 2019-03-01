import styled, { css } from "styled-components";
import Square from "./Square";
import { blue } from "../../style/variables";

// const illinoisBlue = "#13294b";
// const illinoisOrange = "#E84A27";

export const MableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
  border: 2px solid black;
  /* outline: 1px solid black; */
  border-radius: 10px;
`;

export const Row = styled.div`
  align-self: flex-start;
  display: flex;
  /* flex-grow: 1; */
  width: 100%;
  height: 12.5%;
  flex-direction: row;
`;

export const Filler = styled.div`
  display: flex;
  width: ${100 / 12}%;
  /* flex-grow: 1; */
`;

export const DiceSquare = styled(Filler)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
  }

  button {
    /* background-color: white; */
    border: none;
    border-radius: 10px;
    border-color: transparent;

    font-size: 1.5rem;
    /* transition: font-size 0.1s linear; */
    background-color: rgba(0, 0, 0, 0.8);
    transition: background-color 0.1s linear;
    color: rgba(255, 255, 255, 1);
    transition: color 0.1s linear;

    &:hover {
      /* font-size: 1.8rem; */
      background-color: rgba(0, 0, 0, 0.79);
      color: ${blue};
    }
  }
`;

export const CountSquare = styled(Filler)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: black;
  border-radius: 20px;
  perspective: 1000px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.8);
`;
