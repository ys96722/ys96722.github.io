import styled, { css } from "styled-components"
import {
  blue,
  black,
  mint,
  section_header,
  subtitle_header
} from "../../style/variables"
import { Div, Flex, PageContainer } from "../../style/grid"
import { media } from "../../style/media"
import { P } from "../../style/types"

export const HomeContainer = styled(PageContainer)`
/* New */
  
  /* width: 100%; */
  /* height: auto;  */
  /* height: 100%; */
  height: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  background-color: transparent;
/* /New */
  /* ${media.phone`
    padding: 25px;
  `} */
`

export const HeroBanner = styled(Flex)`
  flex-direction: column;
  /* font-size: 6em;
  font-weight: bold;
  line-height: 1; */
  position: relative;
  width: 400px;
  height: 270px;
  /* margin: 0.25em; */
  /* padding: 0.5em 0.75em; */
  text-align: center;
  justify-content: center;
  align-items: center;
  /* border: 0.125em solid ${mint}; */
  border: 1rem solid ${mint};
  color: ${mint};
  border-radius: 10px;
  margin-bottom: 4rem;
  margin-top: 4rem;
  z-index: 1;
  overflow: hidden;

  /* img {
    position: absolute;
    width: 120%;
    height: 120%;
    z-index: -2;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      z-index: -1;
    }
  } */
/* 
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  } */
  

  h1 {
    font-size: 6em;
    font-weight: 500;
    line-height: 1;
  }
  h3 {
    font-size: 2em;
    font-weight: 400;
  }
`

export const HeroText = styled(Div)`
  /* Clip text element */
  /* width: 50%; */
  /* height: 50%; */
  /* box-sizing: border-box; */
  font-size: 6em;
  font-weight: bold;
  line-height: 1;
  position: relative;
  display: inline-block;
  margin: 0.25em;
  padding: 0.5em 0.75em;
  text-align: center;
  /* Color fallback */
  color: #fff;
  /* color: transparent; */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* background-image: url(${props => props.src}); */
  background-color: ${mint};
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;

  /* Background */
  &:before {
    position: absolute;
    content: "";
    z-index: -2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* background-image: inherit; */
    background-color: ${mint};
  }

  /* Text Background (black zone) */
  &:after {
    position: absolute;
    content: "";
    z-index: -1;
    top: 0.125em;
    right: 0.125em;
    bottom: 0.125em;
    left: 0.125em;
    background-color: #000;
  }
`

export const MovieText = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.src});
  background-size: cover;
  background-size: 120% 120%;
  /* background-position: 50% 50%; */
  background-repeat: no-repeat;
  overflow: hidden;
  text-align: center;

  h1 {
    margin: 0;
    line-height: 100vh;
    font-family: "Montserrat", sans-serif;
    font-size: 35vw;
    background: white;
    color: black;
    mix-blend-mode: lighten;
    $text-shadow: ();
    @for $i from 1 through 25 {
      $text-shadow: $text-shadow, 1px * $i 1px * $i black;
    }
    text-shadow: 0px 0px 0px, $text-shadow;
    -webkit-text-stroke: 1px white;
    letter-spacing: 1vw;
    &::before {
      color: white;
      content: "";
      position: absolute;
      margin-left: -1%;
      margin-top: -1%;
      font-size: 35vw;
    }
  }
`

export const Hero = styled.div`
  height: 100vh;
  /* background-image: url(${require("../../assets/finalHero.jpeg")}); */
  background-image: url(${props => props.src});
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
`

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
`

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
`
