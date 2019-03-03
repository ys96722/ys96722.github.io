import styled, { css } from "styled-components";
import { blue, yellow, black, fontSize } from "../../../style/variables";

export const PopupSliderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const PopupSlide = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: inline-block;
  height: 100%;
  width: 100%;
`;


export const SlideWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform: translateX(${ props => props.translateValue }px);
  transition: transform ease-out 0.45s;
`;

export const SlideIndex = styled.span`
  font-size: 1.5rem;
  position: relative;
  padding: 10px;
  top: 3%;
  left: 3%;
  color: white;
  background-color: rgba(0,0,0,0.7);
  border-color: transparent;
  border-radius: 10px;

`

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  
  ${({ direction }) => 
    direction && css`
      ${direction}: 5%
    `
  }

  color: white;
  padding: 10px;
  background-color: rgba(0,0,0,0.7);
  border-color: transparent;
  border-radius: 20px;
  transition: color 0.1s linear;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: rgba(0,0,0,0.79);
    color: ${blue};
  }

  
`;
