import styled, { css } from "styled-components";
import { red, black, blue, Title } from "../../style/variables";
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

  ${Title} {
    margin-bottom: 1em;
  }
`;

// export const Title = styled.h1`
//   font-size: 2rem;
//   color: red;
// `;

export const SectionContainer = styled(Flex)`
  flex-direction: column;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding-top: 20px;
`;

export const Section = styled(Flex)`
  /* flex-direction: row; */
  flex-direction: row;
  width: 100%;
  height: 110vh;
  margin-top: 1.5rem;
  /* background-color: yellow; */
  justify-content: space-evenly;
  border-radius: 10px;
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
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
  height: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  /* background-color: ${props => props.bgColor}; */
  padding-left: 10px;
  padding-right: 10px;
  /* border-left: 10px dashed ${black}; */
  /* border-right: 10px dashed ${black}; */
  /* border-radius: 10px; */
  /* color: white; */
  /* align-content: space-around; */
  /* border: 2px dotted black; */

  /* h3 {
    text-align: left;
  } */
`;

export const ColumnTitle = styled.h1`
  transform: translateY(-3vh);
  /* background-color: white; */
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  color: ${black};
`;

export const SubColumn = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 33%;

  h2 {
    margin-bottom: 0.5em;
    /* color: ${black}; */
  }
`;

export const Item = styled(Flex)`
  flex-direction: row;
  width: 100%;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
`;

export const ItemName = styled.h3`
  /* width: auto; */
  width: 50%;
  margin-right: 2vw;
  text-align: left;
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
