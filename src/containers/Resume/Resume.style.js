import styled from "styled-components";
import { red } from "../../style/variables";
import { Div, Flex } from "../../style/grid";

const leftAmount = 5;
const topAmount = 8;
const fontSize = 3.0;

export const ResumeContainer = styled(Div)`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(0, 0, 0, 0.7); */
  text-align: center;
`;

// export const Title = styled.h1`
//   font-size: 2rem;
//   color: red;
// `;

export const Section = styled(Flex)`
  /* flex-direction: row; */
  flex-direction: row;
  width: 100%;
  height: 100vh;
  margin-top: 1.5rem;
  /* background-color: yellow; */
  justify-content: space-evenly;
`;

// export const Row = styled(Flex)`
//   flex-direction: row;
//   width: 100%;
//   background-color: blue;
//   justify-content: space-evenly;
//   text-align: right;
// `;

export const Column = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  /* background-color: ${props => props.bgColor}; */
  /* align-content: space-around; */
  /* border: 2px dotted black; */

  /* h3 {
    text-align: left;
  } */
`;

export const ColumnTitle = styled.h1`
  transform: translateY(-3vh);
`;

export const SubColumn = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 33%;
`;

export const Item = styled(Flex)`
  flex-direction: row;
  width: 100%;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
`;

export const ItemName = styled.h3`
  width: auto;
  margin-right: auto;
  /* color: white; */
`;

export const Primary = styled.h1`
  width: 100%;
  font-size: ${fontSize}rem;
  /* margin-top: ${topAmount}%; */
  text-align: center;

`;

export const Secondary = styled.h1`
  position: relative;
  width: 100%;
  font-size: ${fontSize - 0.5}rem;
  text-align: center;
  /* margin-top: ${topAmount / 2}%;
  left: ${leftAmount}%; */
`;

export const Tertiary = styled.h1`
  position: relative;
  width: 100%;
  font-size: ${fontSize - 1.0}rem;
  margin-top: ${topAmount / 4}%;
  /* left: ${leftAmount}%; */
`;
