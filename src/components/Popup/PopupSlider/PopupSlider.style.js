import styled, { css } from "styled-components";

export const PopupSliderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
`;

export const PopupSlide = styled.div``;

export const LeftArrow = styled.button`
  position: absolute;
  top: 50%;
  left: 5%;
  /* z-index: 3;
  &::after {
    content: "<-";
  } */
`;
export const RightArrow = styled.button`
  position: absolute;
  top: 50%;
  right: 5%;
  /* z-index: 3; */
  /* &::after {
    content: "->";
  } */
`;
