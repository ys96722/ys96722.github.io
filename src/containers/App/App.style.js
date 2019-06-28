import styled from "styled-components"
import { yellow, mint } from "../../style/variables"
import { media } from "../../style/media"
import { Flex } from "../../style/grid"

export const Background = styled.div`
  position: fixed;
  left: 9vw;
  width: 82vw;
  top: 18vh;
  height: 80vh;
  background-image: url('${require("../../assets/hero.jpeg")}');
  background-color: ${yellow};
  opacity: 0.4;
  /* background-size: 80%; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`

export const SwitchButtonContainer = styled(Flex)`
  position: fixed;
  top: 1.8em;
  left: 2%;

  ${media.tablet`
    position: relative;
    bottom: 0;
    width: fit-content;
    height: auto;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  `}

  ${media.phone`
    padding-top: 30px;
  `}
`

export const SwitchButton = styled.input`
  /* Switch Off Background and Container */
  position: relative;
  width: 50px;
  height: 25px;
  -webkit-appearance: none;
  outline: none;
  border-radius: 20px;
  background-color: linear-gradient(0deg, #333, #000);
  box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e,
    inset 0 0 10px rgba(0, 0, 0, 1), 0 5px 20px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(0, 0, 0, 0.2);
  transition: background 1.5s;

  /* Switch On Background*/
  &:checked {
    /* background: linear-gradient(0deg, #6dd1ff, #20b7ff); */
    background: ${mint};
    /* box-shadow: 0 0 2px #6dd1ff, 0 0 0 4px #353535, 0 0 0 5px #3e3e3e,
      inset 0 0 10px rgba(0, 0, 0, 1), 0 5px 20px rgba(0, 0, 0, 0.5),
      inset 0 0 15px rgba(0, 0, 0, 0.2); blue glow for background*/
    transition: 0.5s;
  }


  /* Sliding Switch */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(0deg, #000, #6b6b6b);
    border-radius: 20px;
    box-shadow: 0 0 0 1px #232323;
    transform: scale(0.98, 0.96);
    transition: 0.5s;
  }

  /* Sliding Animation */
  &:checked::before {
    left: 40%;
  }

  /* Eye of Sliding Switch */
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 2px);
    left: 40%;
    width: 4px;
    height: 4px;
    /* background: linear-gradient(0deg, #6b6b6b, #000); Normal Black Color*/
    background-color: ${mint};
    border-radius: 50%;
    transition: all 0.5s;
  }

  /* Eye Sliding Animation */
  &:checked::after {
    /* background: ${mint}; */
    background: linear-gradient(0deg, #6b6b6b, #000);
    left: 90%;
    /* box-shadow: 0 0 5px #13b3ff, 0 0 15px #13b4ff; move this up and fix color (currently blue) */
  }
`

// export const SVGContainer = styled(Flex)`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
// `
