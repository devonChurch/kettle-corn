import {rem as createRem, padding as createPadding, margin as createMargin, stripUnit as createStrippedUnit} from 'polished';
import spacing from './spacing';
import {media, breakpoints, createMediaQuery} from './media';


const createDynamicValues = ({ unit, min, max }) => {

  // Min...
  const strippedMin = createStrippedUnit(min);
  const viewportRatioMin = createStrippedUnit(breakpoints.small) / 100;
  const viewportValue = strippedMin / viewportRatioMin;

  // Max...
  const strippedMax = createStrippedUnit(max);
  const viewportRatioMax = strippedMax / viewportValue;
  const breakpointMax = 100 * viewportRatioMax;

  return `
    ${unit}: ${createRem(strippedMin)};

    ${media[">=small"]} {
      ${unit}: ${viewportValue}vw;
    }

    ${createMediaQuery(breakpointMax)} {
      ${unit}: ${createRem(strippedMax)};
    }
  `;
};

const createDynamicSpacing = (values) => {

  return Object.keys(values).reduce((accumulator, key) => {

    const value = values[key];
    const { min, max } = spacing[value];
    const styles = min && max ? createDynamicValues({
      unit: key,
      min: min,
      max: max
    }) : `${key}: ${value};`;

    return `${accumulator} ${styles}`;

  }, '');

};

const createDynamicPadding = (values) => {

  const padding = createPadding(...values);
  const dynamicSpacing = createDynamicSpacing(padding);

  return dynamicSpacing
    .replace(/paddingTop/g, 'padding-top')
    .replace(/paddingLeft/g, 'padding-left')
    .replace(/paddingBottom/g, 'padding-bottom')
    .replace(/paddingRight/g, 'padding-right');

}

const createDynamicMargin = (values) => {

  const margin = createMargin(...values);
  const dynamicSpacing = createDynamicSpacing(margin);

  return dynamicSpacing
    .replace(/marginTop/g, 'margin-top')
    .replace(/marginLeft/g, 'margin-left')
    .replace(/marginBottom/g, 'margin-bottom')
    .replace(/marginRight/g, 'margin-right');

}

const dynamic = { createDynamicValues, createDynamicPadding, createDynamicMargin };

export {dynamic as default, createDynamicValues, createDynamicPadding, createDynamicMargin};
