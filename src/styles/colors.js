import { rgba as createRgba, darken as createDarken, lighten as createLighten } from 'polished';

const createSwatches = base => ({
  lightest: createLighten(0.3, base),
  light: createLighten(0.15, base),
  medium: base,
  dark: createDarken(0.15, base),
  darkest: createDarken(0.3, base),
});

const pink = createSwatches('#E91E63');
const blue = createSwatches('#2196F3');
const orange = createSwatches('#FF5722');
const yellow = createSwatches('#FFC107');
const red = createSwatches('#F44336');
const gray = createSwatches('#607D8B');

const purple = (() => {
  const base = '#673AB7';

  return {
    ...createSwatches(base),
    darkest: createDarken(0.2, base),
  };
})();

const green = (() => {
  const base = '#009688';

  return {
    ...createSwatches(base),
    dark: createDarken(0.075, base),
    darkest: createDarken(0.15, base),
  };
})();

const misc = {
  white: '#FFFFFF',
  black: '#000000',
};

// @example
// createColor('gray');
// --> '#607D8B' (Defaults to 'gray', 'medium' as no 'type' was supplied).
//
// @example
// createColor('gray', 'darkest');
// --> '#263238'.
//
// @example
// createColor('gray', 0.5);
// --> 'rgba(96,125,139,0.5)' (Defaults to 'gray', 'medium' as no 'type' was supplied).
//
// @example
// createColor('gray', 'darkest', 0.5);
// --> 'rgba(38,50,56,0.5)'.
const colors = { pink, purple, blue, green, orange, yellow, red, gray, misc };

const createColor = (color, ...options) => {
  // If the 'type' is not supplied OR not compatible we need to assign it as a
  // default of 'medium'. In that regard the 'alpha' reference could site as the
  // second argument rather then the third so we need to test the supplied
  // arguments and distribute them appropriately.
  const { type = 'medium', alpha = 1 } = options.reduce((accumulator, option) => {
    switch (true) {
      case Boolean(typeof option === 'string' && colors[color][option]):
        return { ...accumulator, type: option };

      case Boolean(!isNaN(option) && !(option < 0 || option > 1)):
        return { ...accumulator, alpha: option };

      default:
        return accumulator;
    }
  }, {});

  try {
    const hex = colors[color][type];
    return createRgba(hex, alpha);
  } catch (e) {
    return console.warn(
      `color (swatch = ${color}, tint = ${type}, alpha = ${alpha}) does not exist (substituted in medium gray)`,
    );

    createRgba(gray.medium, 1);
  }
};

export { createColor as default, colors, createColor };
