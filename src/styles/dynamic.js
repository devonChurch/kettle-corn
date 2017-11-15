import {
  rem as createRem,
  padding as createPadding,
  margin as createMargin,
  stripUnit as createStrippedUnit,
  position as createPosition,
  size as createSize,
} from 'polished';
import spacing from './spacing';
import { media, breakpoints, createMediaQuery } from './media';

// Formula (A):
//      _______________________________________________________________________
//     |                                                                       |
//     |     Current Breakpoint (px)                                           |
//     |     -----------------------  =  Pixels Per Viewport (vw : px)         |
//     |              100                                                      |
//     |                                                                       |
//      _______________________________________________________________________
//
// Formula (B):
//      _______________________________________________________________________
//     |                                                                       |
//     |        Element Value (px)                                             |
//     |     ------------------------  =  Viewport Units (vw)                  |
//     |     Pixels Per Viewport Unit                                          |
//     |                                                                       |
//      _______________________________________________________________________
//
//
// @exmaple
//
// We have a minimum 'font-size' value of 10px and a maximum of 30px.
//
// We need to find...
//
// + The number of pixels a single viewpoint unit represents at the 'small'
//   breakpoint.
// + The total viewport units (vw) to assign at the 'small' breakpoint which will
//   represent the minimum 'px' value at that breakpoint and begin the scale to
//   the maximum value as the browser width increases.
// + The breakpoint in which the maximum value will be reached (so that we can
//   STOP scaling the value against the browser width).
//
// Formula (A):
// 600 / 100 = 6 // 6px for every 1vw unit at a breakpoint of 600px.
//
// Formula (B):
// 10 / 6 = 1.6 // 1.6vw represents 10px (minimum font-size) at a breakpoint of
//              // 600px.
//
// Formula (B) - rearranged:
// 30 / 1.6 = 18 // 18px represents the number of pixels per 1 viewpoint unit (vw)
//               // when the maximum font-size value is reached.
//
// Formula (A) - rearranged:
// 100 * 18 = 1800 // 1800px represents the breakpoint width that would reach the
//                 // maximum font-size so that we can reassign it to a static
//                 // value to stop scaling against the browser width.
//
// Result (to be injected into a styled-component):
//      _______________________________________________________________________
//     |                                                                       |
//     |     font-size: 0.625rem; // 10px                                      |
//     |                                                                       |
//     |     @media all and (min-width: 37.5rem}) { // 600px                   |
//     |       font-size: 1.6vw;                                               |
//     |     }                                                                 |
//     |                                                                       |
//     |     @media all and (min-width: 106.25rem}) { // 1700px                |
//     |       font-size: 1.875rem; // 30px                                    |
//     |     }                                                                 |
//     |                                                                       |
//      _______________________________________________________________________

const createDynamicValues = ({ unit, min, max }) => {
  // Min...
  const strippedMin = createStrippedUnit(`${min}`);
  const viewportRatioMin = createStrippedUnit(breakpoints.small) / 100;
  const viewportValue = strippedMin / viewportRatioMin;

  // Max...
  const strippedMax = createStrippedUnit(`${max}`);
  const viewportRatioMax = strippedMax / viewportValue;
  const breakpointMax = 100 * viewportRatioMax;

  return `
    ${unit}: ${createRem(strippedMin)};

    ${media['>=small']} {
      ${unit}: ${viewportValue}vw;
    }

    ${createMediaQuery(breakpointMax)} {
      ${unit}: ${createRem(strippedMax)};
    }
  `;
};

const getMinMaxValues = value => {
  switch (true) {
    case Boolean(value.min && value.max):
      return value;

    case Boolean(spacing[value]):
      return spacing[value];

    default:
      return {};
  }
};

const createDynamicStyle = (key, value) => {
  const { min, max } = getMinMaxValues(value);

  return min && max
    ? createDynamicValues({
        unit: key,
        min,
        max,
      })
    : `${key}: ${value};`;
};

const createDynamicSpacing = values => {
  return Object.keys(values).reduce((accumulator, key) => {
    const value = values[key];
    const style = createDynamicStyle(key, value);

    return `${accumulator} ${style}`;
  }, '');
};

const createDynamicPadding = (values = []) => {
  const padding = createPadding(...values);
  const dynamic = createDynamicSpacing(padding);

  return dynamic
    .replace(/paddingTop/g, 'padding-top')
    .replace(/paddingLeft/g, 'padding-left')
    .replace(/paddingBottom/g, 'padding-bottom')
    .replace(/paddingRight/g, 'padding-right');
};

const createDynamicMargin = (values = []) => {
  const margin = createMargin(...values);
  const dynamic = createDynamicSpacing(margin);

  return dynamic
    .replace(/marginTop/g, 'margin-top')
    .replace(/marginLeft/g, 'margin-left')
    .replace(/marginBottom/g, 'margin-bottom')
    .replace(/marginRight/g, 'margin-right');
};

const createDynamicFontSize = (value = []) => {
  return createDynamicStyle('font-size', value);
};

const createDynamicPosition = (values = []) => {
  const position = createPosition(...values);

  return createDynamicSpacing(position);
};

const createDynamicSize = (values = []) => {
  const size = createSize(...values);

  return createDynamicSpacing(size);
};

const createDynamicMinWidth = (value = 'inherit') => {
  return createDynamicStyle('min-width', value);
};

const createDynamicMaxWidth = (value = 'inherit') => {
  return createDynamicStyle('max-width', value);
};

const createDynamicMinHeight = (value = 'inherit') => {
  return createDynamicStyle('min-height', value);
};

const createDynamicMaxHeight = (value = 'inherit') => {
  return createDynamicStyle('max-height', value);
};

const dynamic = {
  createDynamicValues,
  createDynamicPadding,
  createDynamicMargin,
  createDynamicFontSize,
  createDynamicPosition,
  createDynamicSize,
  createDynamicMinWidth,
  createDynamicMaxWidth,
  createDynamicMinHeight,
  createDynamicMaxHeight,
};

export {
  dynamic as default,
  createDynamicValues,
  createDynamicPadding,
  createDynamicMargin,
  createDynamicFontSize,
  createDynamicPosition,
  createDynamicSize,
  createDynamicMinWidth,
  createDynamicMaxWidth,
  createDynamicMinHeight,
  createDynamicMaxHeight,
};
