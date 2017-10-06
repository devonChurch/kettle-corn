import {rem as createRem, padding as createPadding, margin as createMargin, stripUnit as createStrippedUnit, position as createPosition, size as createSize} from 'polished';
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
    const { min, max } = value.min && value.max ? value : spacing[value];
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
  const dynamic = createDynamicSpacing(padding);

  return dynamic
    .replace(/paddingTop/g, 'padding-top')
    .replace(/paddingLeft/g, 'padding-left')
    .replace(/paddingBottom/g, 'padding-bottom')
    .replace(/paddingRight/g, 'padding-right');

}

const createDynamicMargin = (values) => {

  const margin = createMargin(...values);
  const dynamic = createDynamicSpacing(margin);

  return dynamic
    .replace(/marginTop/g, 'margin-top')
    .replace(/marginLeft/g, 'margin-left')
    .replace(/marginBottom/g, 'margin-bottom')
    .replace(/marginRight/g, 'margin-right');

}

const createDynamicFontSize = ({min, max}) => {

  return min && max ? createDynamicValues({
    unit: 'font-size',
    min,
    max
  }) : '';

};

const createDynamicPosition = (values) => {

  const position = createPosition(...values);

  return createDynamicSpacing(position);

};

const createDynamicSize = (values) => {

  const size = createSize(...values);

  return createDynamicSpacing(size);

};

const dynamic = { createDynamicValues, createDynamicPadding, createDynamicMargin, createDynamicFontSize, createDynamicPosition, createDynamicSize };

export {dynamic as default, createDynamicValues, createDynamicPadding, createDynamicMargin, createDynamicFontSize, createDynamicPosition, createDynamicSize};
