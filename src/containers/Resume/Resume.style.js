import styled from "styled-components";
import { red } from "../../style/variables";

const leftAmount = 5;
const topAmount = 8;
const fontSize = 3.0;

// export const ResumeContainer = styled.div`

// `

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
