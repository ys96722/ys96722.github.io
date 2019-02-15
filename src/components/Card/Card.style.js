import styled, { css } from "styled-components";


// export const CardContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   /* margin: 32px auto; */
//   margin: auto;
//   max-width: 400px;
//   height: 500px;
//   perspective: 1000px;
//   background-color: black;
// `;
export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
export const CardTitle = styled.h1``;
export const CardHeader = styled.h2``;
export const CardContent = styled.p``;
export const CardLink = styled.a``;



export const Inner = styled.div`
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
`;

export const CardFront = styled.div`
  background-size: cover;
  background-position: center;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 280px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
  background-image: url("src/assets/website_banners/native_hero.png");
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    opacity: 0.6;
    background-color: #000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  ${Inner} p {
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }

  ${Inner} p &::after {
    content: "";
    width: 4rem;
    height: 2px;
    position: absolute;
    background: #c6d4df;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -0.75rem;
  }

  ${Inner} span {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Montserrat";
    font-weight: 300;
  }
`;

export const CardBack = styled.div`
  background-size: cover;
  background-position: center;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 280px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;

  background: #cedce7;
  background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const CardContainer = styled.div`
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  width: calc(31%);
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-color: black;
  border-width: 1rem;

  &:hover ${CardFront}, ${CardBack} {
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
      -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  ${CardBack} {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  ${CardFront} {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  &:hover ${CardBack} {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  &:hover ${CardFront} {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  /* Figure out how to do descendent selectors */
  /* & > p {
    font-color: red;
  } */
`;
