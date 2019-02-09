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

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  h1 {
    font-size: ${section_header};
    font-weight: bold;
    color: ${yellow};
    opacity: 0.6;
    transform: translateY(20%);
  }
`;

export const ImageContainer = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
