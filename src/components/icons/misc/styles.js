import styled, {css, keyframes} from 'styled-components';
import {padding as createPadding, margin as createMargin, rem as createRem} from 'polished';
import {media, breakpoints, spacing, dynamic, createColor} from '../../../styles';

const loaderDotSpeed = 0.25;
const loaderDotAnimation = keyframes`
	0% { fill: ${createColor('gray', 'dark')}; }
	10% { fill: ${createColor('blue')}; }
  50% { fill: ${createColor('gray', 'dark')}; }
  100% { fill: ${createColor('gray', 'dark')}; }
`;

const icons = {

  Ssvg: styled.svg`
    display: ${({isInline}) => isInline ? 'inline-block' : 'block'};
    fill: ${({color}) => color};
  `,

  SloaderWrapper: styled.div`
    position: relative;

    > svg:nth-child(1) {
      position: static;
    }
  `,

  SloaderDot: styled.svg`
    animation-delay: ${({delay}) => `${delay * loaderDotSpeed}s`};
    animation-duration: ${9 * loaderDotSpeed}s;
    animation-iteration-count: infinite;
    animation-name: ${loaderDotAnimation};
    animation-timing-function: linear;
    fill: ${createColor('gray', 'dark')};
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  `

}

export default icons;