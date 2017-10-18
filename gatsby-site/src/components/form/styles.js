import styled, {css} from 'styled-components';
import { rem as createRem, stripUnit as createStrippedUnit } from 'polished'
import {createColor, spacing, speed, media, breakpoints, dynamic, misc} from '../../styles';

const Sinput = styled.input`
  border: 3px solid ${createColor('gray', 'light')};
  border-radius: ${misc.radius};
  font-size: ${createRem('16px')};
  outline: 0;
  padding: ${spacing.small.min} ${spacing.small.max};
  transition-duration: ${speed.fast};
  transition-property: border-color, color;
  width: 100%;

  &:focus {
    border-color: ${createColor('blue')};
    color: ${createColor('blue', 'darkest')};

    + * {
      color: ${createColor('blue')};
      transform: scale(0.7) translate(0, 0);
    }
  }

  ${({isPopulated}) => isPopulated && css`
    border-color: ${createColor('gray', 'dark')};
    color: ${createColor('gray', 'darkest')};
  `}
`;

const style = {

  Sform: styled.form`
    max-width: ${breakpoints.small};
  `,

  Slabel: styled.label`
    display: block;
    padding: ${spacing.medium.max} 0;
    position: relative;
  `,

  Sinput,

  StextArea: Sinput.withComponent('textarea').extend`
    max-width: ${breakpoints.small};
  `,

  Sname: styled.div`
    color: ${createColor('gray', 'light')};
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(${spacing.small.max}, ${createStrippedUnit(spacing.medium.max) + createStrippedUnit(spacing.small.min)}px);
    transform-origin: left top;
    transition-duration: ${speed.fast};
    transition-property: color, transform;

    ${({isPopulated}) => isPopulated && css`
      color: ${createColor('gray', 'dark')};
      transform: scale(0.7) translate(0, 0);
    `}
  `,

}

export default style;
