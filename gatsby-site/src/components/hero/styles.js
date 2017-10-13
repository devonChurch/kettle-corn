import styled, {css} from 'styled-components';
import { rem as createRem } from 'polished'
import {media, dynamic} from '../../styles';

const {createDynamicPosition, createDynamicSize} = dynamic;
const arrowSize = {min: '20px', max: '40px'};
const createArrowPosition = (position = []) => {

  switch (position.join(',')) {

    case 'center,bottom':
      return css`
        left: 50%;
        top: 100%;
      `

    case 'left,bottom':
      return css`
        left: 10%;
        top: 100%;
      `

    case 'left,top':
      return css`
        bottom: 100%;
        left: 10%;
        transform-origin: center bottom;
        transform: rotate(45deg) translateX(50%);
      `

    default:
      return css`
        display: none
      `;
  }

}

const createWrapper = (element) => styled[element]`
  position: relative;

  &:before {
    background: ${({color}) => color};
    content: '';
    display: block;
    position: absolute;
    transform: rotate(45deg) translateX(-50%);
    transform-origin: center top;
    z-index: -1;
    ${createDynamicSize([arrowSize])}
    ${({arrow}) => createArrowPosition(arrow)}
  }
`;

const styles = { createWrapper };

export default styles;
