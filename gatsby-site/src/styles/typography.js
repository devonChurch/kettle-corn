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
      name: 'Glegoo',
      styles: [
        '400',
        '700',
      ],
    }
  ],

  headerFontFamily: ['Glegoo', 'serif'],
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
