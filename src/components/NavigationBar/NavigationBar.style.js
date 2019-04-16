import styled, { css } from "styled-components";
import { Flex, Div } from "../../style/grid";
import { blue, yellow, red, black } from "../../style/variables";
import { Link, IndexLink } from "react-router";
import { media } from "../../style/media";

const NavItemCSS = css`
  position: relative;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.5em;
  cursor: pointer;
  color: ${black};
  text-decoration: none;
  z-index: 100;
  border-radius: 10px;

  ${media.tablet`
    /* font-size: 1rem; */
  `}
  ${media.phone`
    font-size: 1.5rem;
  `}


  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: white; */
    border-radius: 10px;
    z-index: -1;
    transform: scale(1.3, 1.5);
  }

  &:before {
    content: attr(title);
  }

  &:hover {
    color: white;
    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${black};
      z-index: -1;
      transform: scale(1.3, 1.5);
    }
  }
`;

const NavItemActiveCss = css`
  color: ${blue};
  &:before {
    content: "{ " attr(title) " }";
  }

  &:hover {
    color: white;
  }
`;

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 2em;
  top: 1.8em;
  z-index: 98;
  height: 7vh;

  ${media.tablet`
    /* font-size: 1rem; */
  `}
  ${media.phone`
    position: absolute;
    justify-content: space-evenly;
    top: 5;
    width: 100%;
    right: 0;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    
    /* position: absolute; 
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 10px; */
  `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: #8ca3a7; */
    /* background-color: ${black}; */
    background-color: #002366;
    border-radius: 10px;
    opacity: 0.15;
    filter: blur(2px);
  }
`;

export const NavigationItem = styled(Link)`
  ${NavItemCSS}

  &.activeNavItem {
    ${NavItemActiveCss}
  }
`;

export const IndexNavigationItem = styled(IndexLink)`
  ${NavItemCSS}

  &.activeIndexItem {
    ${NavItemActiveCss}
  }
`;
