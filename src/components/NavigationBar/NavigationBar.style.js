import styled, { css } from "styled-components"
import { Flex } from "../../style/grid"
import { blue, black, mint } from "../../style/variables"
import { Link, IndexLink } from "react-router"
import { media } from "../../style/media"

const NavItemCSS = css`
  position: relative;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 10px;
  font-size: 1.5em;
  cursor: pointer;
  /* color: ${black}; */
  color: white;
  text-decoration: none;
  z-index: 100;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
  ${media.phone`
    font-size: 1.5rem;
  `}


  &:after {
    transition: all 0.2s ease-in-out;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: white; */
    border-radius: 10px;
    z-index: -1;
    /* padding: 10px 10px 10px 10px; */
  }

  
  span {
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
  }

  &:hover {
    span {
      opacity: 1;
    }
  }
`

const NavItemActiveCss = css`
  color: ${blue};
  span {
    opacity: 1;
  }
  /* &:before {
    content: "{ " attr(title) " }";
  } */
`

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 2em;
  top: 1.8em;
  z-index: 98;
  height: 7vh;
  flex-direction: row;
  justify-content: space-evenly; /* x-axis */
  align-items: center; /* y-axis */

  @media (max-width: 768px) {
    position: absolute;
    top: 5;
    width: 100%;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  ${media.phone`
    
    
  `}
`

export const NavigationItem = styled(Link)`
  ${NavItemCSS}

  &.activeNavItem {
    ${NavItemActiveCss}
  }
`

export const IndexNavigationItem = styled(IndexLink)`
  ${NavItemCSS}

  &.activeIndexItem {
    ${NavItemActiveCss}
  }
`

export const ItemDiv = styled.li`
  display: flex;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${black};
  }
`
