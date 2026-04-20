import styled, { css, keyframes } from "styled-components"
import { sizes } from 'constants/MediaConstants'

const fadeIn = keyframes`
  0% {
      opacity: 0;
      /* transform: translateY(10%); */
  }
  100% {
      opacity: 1;
      /* transform: translateY(0); */
  }
`

interface IDivProps {
  animation?: string
  marginBottom?: string
  marginTop?: string
  marginLeft?: string
  marginRight?: string
  width?: string
}


export const Div = styled.div<IDivProps>`
  ${({ animation }) =>
    animation &&
    css`
      animation: 1s ease-in-out 0s 1 ${fadeIn};
      -webkit-animation: 1s ease-in-out 0s 1 ${fadeIn};
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
`

interface IFlexProps {
  direction?: string
  justify?: string
  align?: string
}

export const Flex = styled(Div)<IFlexProps>`
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

`

export const Container = styled(Div)`
  background-color: ${props => props.theme.background};

  padding-left: 120px;
  padding-right: 120px;
  padding-top: 120px;
  padding-bottom: 120px;

  display: flex;
  min-height: 100vh;
  height: 100%;
  justify-content: center;

  transition: background 0.5s;

  @media (max-width: ${sizes.tablet}px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: ${sizes.tablet}px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const PageHeader = styled(Flex)`
  width: 60%;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  color: ${props => props.theme.color};

  h2 {
    font-weight: 400;
  }
`

export const PageContainer = styled(Flex)`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`

export const SectionWrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 40px;

  @media (max-width: ${sizes.tablet}px) {
    padding: 80px 24px;
  }

  @media (max-width: ${sizes.phone}px) {
    padding: 60px 16px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.color};
  margin-bottom: 3rem;
  letter-spacing: -0.02em;

  &::before {
    content: "{ ";
    color: ${props => props.theme.accent};
  }

  &::after {
    content: " }";
    color: ${props => props.theme.accent};
  }
`
