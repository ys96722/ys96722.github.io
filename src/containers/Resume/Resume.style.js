import styled from "styled-components";
import { red } from "../../style/variables";

const leftAmount = 5;
const fontSize = 3.0;

export const Primary = styled.h1`
    width: 100%;
    font-size: ${fontSize}rem;
`

export const Secondary = styled.h1`
    position: relative;
    width: 100%;
    font-size: ${fontSize - 0.5}rem;
    left: ${leftAmount}%;
`

export const Tertiary = styled.h1`
    position: relative;
    width: 100%;
    font-size: ${fontSize - 1.0}rem;
    left: ${leftAmount*2}% ;
`
