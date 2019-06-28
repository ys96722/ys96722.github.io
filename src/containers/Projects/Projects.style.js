import styled, { css } from "styled-components"
import { blue, black, mint } from "../../style/variables"

import { Flex, PageContainer } from "../../style/grid"

import { media } from "../../style/media"

export const ProjectContainer = styled(PageContainer)``

export const ButtonContainer = styled(Flex)`

  @media (max-width: 600px) {
    flex-direction: column;
  }
  /* ${media.phone`
    flex-direction: column;
  `} */
`

export const Button = styled.button`
  background-color: ${black};
  /* background-color: ${mint}; */
  /* color: white; */
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;

  &:hover {
    /* background-color: ${blue}; */
    background-color: black;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: black;
      color: white;
    `}
`

/* 
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
`; */
