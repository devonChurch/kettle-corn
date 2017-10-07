import Typography from 'typography';
import {createColor} from './colors'

const typography = new Typography({

  title: 'Enhance Digital',

  // baseFontSize: '16px',
  baseLineHeight: 1.45,
  scaleRatio: 3.25,

  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '500',
        '900',
      ],
    },
    {
      name: 'Karma',
      styles: [
        '300',
        '500',
        '700',
      ],
    }
  ],

  headerFontFamily: ['Karma', 'serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],

  // headerColor: 'inherit',
  bodyColor: createColor('gray', 'dark'),

  headerWeight: '700',
  bodyWeight: '500',

  // boldWeight: 'bold'
  // blockMarginBottom: ...

  // includeNormalize: true,

});

export default typography;
