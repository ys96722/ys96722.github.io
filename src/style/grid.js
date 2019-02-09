import styled, { css } from "styled-components";
import media from "./media";

export const Div = styled.div`
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `}
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `}


`;

export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  /* padding-top: 30px; */
  padding-top: 120px;
  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
  `}
  ${media.phone`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  `}
`;

export const Relative = styled(Div)`
  position: relative;
`;

export const Flex = styled(Div)`
  display: flex;

  ${({ column }) =>
    column &&
    css`
      flex-direction: ${column};
    `}

  ${({ row }) =>
    row &&
    css`
      flex-direction: ${row};
    `}

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

  ${({ align }) =>
    align &&
    css`
      align-content: ${align};
    `}

`;
