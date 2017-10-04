import styled, {css} from 'styled-components';
import { rem } from 'polished'
import {media} from '../../styles';

const createArrowPosition = ({position, offset}) => {

  switch (position.join(',')) {

    case 'center,bottom':
      return css`
        left: calc(50% - ${offset});
        top: calc(100% - ${offset});
      `

    case 'left,bottom':
      return css`
        left: calc(10% - ${offset});
        top: calc(100% - ${offset});
      `

    case 'left,top':
      return css`
        bottom: calc(100% - ${offset});
        left: calc(10% - ${offset});
      `

    default:
      return css`
        display: none
      `;
  }

}

const createResponsiveArrow = ({arrow: position = [], size, offset}) => {

  return css`
    height: ${size};
    width: ${size};
    ${createArrowPosition({position, offset})}
  `;

}

const createWrapper = (element) => styled[element]`
  position: relative;

  &:before {
    background: ${({color}) => color};
    content: '';
    display: block;
    position: absolute;
    transform: rotate(45deg);
    transform-origin: center center;
    z-index: -1;
    ${({arrow}) => createResponsiveArrow({arrow, size: rem('24px'), offset: rem('12px')})}

    ${media['>=medium']} {
      ${({arrow}) => createResponsiveArrow({arrow, size: '4vw', offset: '2vw'})}
    }

    ${media['>=large']} {
      ${({arrow}) => createResponsiveArrow({arrow, size: rem('48px'), offset: rem('24px')})}
    }
  }
`;

const styles = { createWrapper };

export default styles;
