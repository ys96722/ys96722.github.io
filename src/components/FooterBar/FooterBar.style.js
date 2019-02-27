import styled, { css } from "styled-components";
import { Flex, Div } from "../../style/grid";
import { blue, yellow, red, black } from "../../style/variables";

// const NavItemCSS = css`
//   position: relative;
//   margin-right: 30px;
//   font-size: 1.5em;
//   cursor: pointer;
//   color: ${black};
//   text-decoration: none;
//   z-index: 100;

//   &:before {
//     content: attr(title);
//   }

//   &:hover {
//     color: white;
//     &:after {
//       content: " ";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: ${black};
//       z-index: -1;
//       transform: scale(1.3, 1.5);
//     }
//   }
// `;

// const NavItemActiveCss = css`
//   color: ${blue};
//   &:before {
//     content: "{ " attr(title) " }";
//   }

//   &:hover {
//     color: white;
//   }
// `;

export const FooterBarContainer = styled(Flex)`
  position: fixed;
  right: 2em;
  top: 1.8em;
  z-index: 100;
`;

export const FooterBarItem = styled.button`

`

// export const NavigationItem = styled(A)`
//   ${NavItemCSS}

//   &.activeNavItem {
//     ${NavItemActiveCss}
//   }
// `;

// export const IndexNavigationItem = styled(IndexLink)`
//   ${NavItemCSS}

//   &.activeIndexItem {
//     ${NavItemActiveCss}
//   }
// `;