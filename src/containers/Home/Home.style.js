import styled from "styled-components";
import {
  yellow,
  red,
  blue,
  black,
  section_header,
  title_header,
  subtitle_header
} from "../../style/variables";

export const Image = styled.img`
  width: 100%;
`;

export const Hero = styled.div`
  height: 100vh; 
  background-image: url('${require("../../assets/hero.jpeg")}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: top;

  text-align: center;
  color: black;
  font-size: ${section_header};

  h1, h2 {
    transform: translateY(-12vh);
  }

  h1 {
    text-shadow: 1.5px 1.5px white;
    /* #247ba0 */
  }

  h2 {
    color: ${red};
    text-shadow: 1.5px 1.5px black;
  }
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    /* Sets the cover */
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    /* Transformation */
    transform-origin: left;
    transform: rotateY(90deg);

    transition: transform 1s;
  }

  ${({ hide }) =>
    hide &&
    `
      &:after {
        transform: rotateY(0deg);
      }
    `}
`;
