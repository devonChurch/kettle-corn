import { rem as createRem } from 'polished'

const small = 600;
const medium = 900;
const large = 1200;

const breakpoints = {
  small: `${small}px`,
  medium: `${medium}px`,
  large: `${large}px`
};

const createMediaQuery = (breakpoint) => `@media all and (min-width: ${createRem(breakpoint)})`;

const media = {
  ">=small": createMediaQuery(small),
  ">=medium": createMediaQuery(medium),
  ">=large": createMediaQuery(large)
};

export {media as default, media, breakpoints, createMediaQuery};
