import styled, { css } from "styled-components";
import { Flex, Div } from "../../style/grid";
import { blue, yellow, red, black } from "../../style/variables";
import { Link, IndexLink } from "react-router";

const NavItemCSS = css`
  position: relative;
  margin-right: 30px;
  font-size: 1.5em;
  cursor: pointer;
  color: ${black};
  text-decoration: none;
  z-index: 100;
  border-radius: 10px;
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
  border-radius: 10px;
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
