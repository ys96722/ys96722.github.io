import styled, { keyframes, css } from "styled-components";

export const fade_in = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  
`;

export const fade_out = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  
`;

export const SongDiv = styled.div`
  /* display: ${props => props.show} ; */
  visibility: ${props => props.show};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* justify-content: center;
  align-items: center;
  overflow: hidden */

  /* animation: ${props => props.animation}; */
  ${({ zVal }) =>
    zVal &&
    css`
      z-index: ${zVal};
    `}

  ${({ animateIn }) =>
    animateIn &&
    css`
      animation: ${fade_in} 0.5s ease-in;
    `}

    ${({ animateOut }) =>
      animateOut &&
      css`
        animation: ${fade_out} 0.5s ease-out;
      `}
  /* animation: ${fade_in} 0.5s ease-in; */
`;
