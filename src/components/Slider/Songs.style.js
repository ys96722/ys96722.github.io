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

// const HapFrame = ({ show }) => (
//     <div className="frame" style={{ display: show ? "initial" : "none" }}>

//     </div>
// );

export const SongDiv = styled.div`
  display: ${props => props.show};
  /* justify-content: center;
  align-items: center;
  overflow: hidden */

  /* animation: ${props => props.animation}; */

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
