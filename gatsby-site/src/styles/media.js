import { rem } from 'polished'

const small = rem('600px');
const medium = rem('900px');
const large = rem('1200px');

const media = {
  '>=small': `@media all and (min-width: ${small})`,
  '>=medium': `@media all and (min-width: ${medium})`,
  '>=large': `@media all and (min-width: ${large})`,
};

const breakpoints = { small, medium, large };

export {media as default, breakpoints};
