import styled, { css } from "styled-components";
import {
  blue,
  black,
  section_header,
  subtitle_header
} from "../../style/variables";
import { Div } from "../../style/grid";
import { media } from "../../style/media";
import { P } from "../../style/types";

export const Image = styled.img`
  width: 100%;
`;

export const HomeContainer = styled(Div)`
  ${media.phone`
    padding: 25px;
  `}
`;

export const Hero = styled.div`
  height: 100vh;
  background-image: url(${require("../../assets/finalHero.jpeg")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: top;

  text-align: center;
  color: black;
  font-size: ${section_header};

  h1,
  h2 {
    transform: translateY(-11vh);
    @media (max-width: 800px) {
      font-size: 7rem;
      transform: translateY(-5vh);
    }

    @media (max-width: 507px) {
      font-size: 4rem;
    }
  }

  h1 {
    color: ${black};
    /* text-shadow: 1.5px 1.5px white; */
    /* #247ba0 */
  }

  h2 {
    color: ${blue};
    @media (max-width: 1037px) {
      span {
        display: none;
      }
    }
  }
`;

export const SubHeader = styled.h2`
  font-size: ${subtitle_header};
  margin-top: 6%;
  margin-bottom: 2%;

  ${media.tablet`
    /* font-size: 1rem; */
  `}
  ${media.phone`
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
  `}
`;

export const RevealP = styled(P)`
  position: relative;
  opacity: 1;
  transform: translateY(0);

  transition: all 2s;
  transition-property: opacity, transform;

  ${media.tablet`
    
  `}
  ${media.phone`
    font-size: 1.0rem;
    text-align: center;
  `}


  span {
    font-family: "VT323", monospace;
    font-size: 1.5rem;

    @media (max-width: 660px) {
      display: inline-block;
      text-align: center;
    }
  }

  ${({ hide }) =>
    hide &&
    css`
      opacity: 0;
      transform: translateY(-50px);
    `}
`;
