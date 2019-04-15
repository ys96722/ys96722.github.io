import styled, { css, keyframes } from "styled-components";
import media from "./media";

const fadeIn = keyframes`
  0% {
      opacity: 0;
      transform: translateY(10%);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`;

export const Div = styled.div`
  ${({ animation }) =>
    animation &&
    css`
      animation: 1s ease-in-out 0s 1 ${fadeIn};
    `};

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `};
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `};

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;

export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 120px;
  padding-bottom: 120px;
  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
    /* padding-top: 15px; */
  `}
  ${media.phone`
    padding-left: 10px;
    padding-right: 10px;
    /* padding-top: 15px; */
  `}
`;

export const Relative = styled(Div)`
  position: relative;
`;

export const Flex = styled(Div)`
  display: flex;

  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}


  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}

`;
