import styled, { css } from "styled-components";
import {
  yellow,
  red,
  blue,
  black,
  section_header,
  title_header,
  subtitle_header
} from "../../style/variables";

import {media} from "../../style/media";
import { P } from "../../style/types";

export const Image = styled.img`
  width: 100%;
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
          /* ${media.tablet`
            font-size: 1rem;
          `}
          ${media.phone`
            font-size: 2rem;
          `} */
         }

         h1 {
           color: ${black};
           /* text-shadow: 1.5px 1.5px white; */
           /* #247ba0 */
         }

         h2 {
           color: ${blue};
           /* text-shadow: 1.5px 1.5px black; */
         }
       `;

export const SubHeader = styled.h2`
  font-size: ${subtitle_header};
  margin-top: 6%;
  margin-bottom: 2%;
`;

export const RevealP = styled(P)`
  position: relative;
  opacity: 1;
  transform: translateY(0);

  transition: all 2s;
  transition-property: opacity, transform;

  span {
    font-family: "VT323", monospace;
    font-size: 1.5rem;
  }

  ${({ hide }) =>
    hide &&
    css`
      opacity: 0;
      transform: translateY(-50px);
    `}
`;
