import { rgba as createRgba } from 'polished'

const pink = {

  lightest: '#F8BBD0',
  light: '#F06292',
  medium: '#E91E63',
  dark: '#C2185B',
  darkest: '#880E4F',

};

const purple = {

  lightest: '#D1C4E9',
  light: '#9575CD',
  medium: '#673AB7',
  dark: '#512DA8',
  darkest: '#311B92',

};

const blue = {

  lightest: '#BBDEFB',
  light: '#64B5F6',
  medium: '#2196F3',
  dark: '#1976D2',
  darkest: '#0D47A1',

};

const green = {

  lightest: '#B2DFDB',
  light: '#4DB6AC',
  medium: '#009688',
  dark: '#00796B',
  darkest: '#004D40',

};

const orange = {

  lightest: '#FFCCBC',
  light: '#FF8A65',
  medium: '#FF5722',
  dark: '#E64A19',
  darkest: '#BF360C',

};

const yellow = {

  lightest: '#FFECB3',
  light: '#FFD54F',
  medium: '#FFC107',
  dark: '#E59E00',
  darkest: '#B77A00',

};

const gray = {

  lightest: '#CFD8DC',
  light: '#90A4AE',
  medium: '#607D8B',
  dark: '#455A64',
  darkest: '#263238',

};

const misc = {

  white: '#FFFFFF',
  black: '#000000',

}

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
const colors = {pink, purple, blue, green, orange, yellow, gray, misc};

const createColor = (color, ...options) => {

  // If the 'type' is not supplied OR not compatible we need to assign it as a
  // default of 'medium'. In that regard the 'alpha' reference could site as the
  // second argument rather then the third so we need to test the supplied
  // arguments and distribute them appropriately.
	const {type = 'medium', alpha} = options.reduce((accumulator, option) => {

		switch (true) {

			case Boolean(typeof option === 'string' && colors[color][option]):
				return {...accumulator, type: option};

			case Boolean(!isNaN(option) && option >= 0 && option <= 1):
				return {...accumulator, alpha: option};

			default:
				return accumulator;

  	}

	}, {});

	const hex = colors[color][type];

	return alpha ? createRgba(hex, alpha) : hex;

};

export {createColor as default, colors, createColor};
