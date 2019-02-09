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
`;
