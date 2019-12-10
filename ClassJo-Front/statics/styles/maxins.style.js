import { css } from "styled-components";
import { breakpoints } from "./utils.style";

export const mediaSize = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const materialShadow = (zDepth = 1, strength = 1, color = "black") => {
  if (zDepth == 1) {
    return css`
      box-shadow: 0 1px 3px rgba(${color}, ${strength} * 0.14),
        0 1px 2px rgba(${color}, ${strength} * 0.24);
    `;
  }
  if (zDepth == 2) {
    return css`
      box-shadow: 0 3px 6px rgba(${color}, ${strength} * 0.16),
        0 3px 6px rgba(${color}, ${strength} * 0.23);
    `;
  }
  if (zDepth == 3) {
    return css`
      box-shadow: 0 10px 20px rgba(${color}, ${strength} * 0.19),
        0 6px 6px rgba(${color}, ${strength} * 0.23);
    `;
  }
  if (zDepth == 4) {
    return css`
      box-shadow: 0 15px 30px rgba(${color}, ${strength} * 0.25),
        0 10px 10px rgba(${color}, ${strength} * 0.22);
    `;
  }
  if (zDepth == 5) {
    return css`
      box-shadow: 0 20px 40px rgba(${color}, ${strength} * 0.14),
        0 15px 12px rgba(${color}, ${strength} * 0.22);
    `;
  }
  return;
};
