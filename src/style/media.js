import { css } from "styled-components";

export const sizes = {
  phone: 420,
  tablet: 768,
  desktop: 992,
  giant: 1170
};

export const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media (max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

