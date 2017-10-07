import styled, {css} from 'styled-components';
import { rem as createRem, stripUnit as createStrippedUnit } from 'polished'
import {createColor, spacing, media, breakpoints, dynamic} from '../../styles';

const {createDynamicFontSize} = dynamic;
const maxWidth = createRem(breakpoints.small);

const SheadingOne = styled.h1`
  color: ${(props) =>  props.color || createColor('gray', 'light')};
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
  max-width: ${maxWidth};

  ${createDynamicFontSize({
    min: '35px',
    max: '48px',
  })}

  &:after {
    background: ${({color}) => color || createColor('gray', 'light')};
    content: '';
    display: block;
    height: ${createRem('6px')};
    opacity: 0.2;
    width: ${createRem('56px')};
  }
`;

const style = {

  SheadingOne: SheadingOne,

  SheadingTwo: SheadingOne.withComponent('h2').extend`
    font-weight: 400;
  `,

  SheadingThree: styled.h3`
    color: ${(props) => props.color || createColor('gray', 'light')};
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
    max-width: ${maxWidth};

    ${createDynamicFontSize({
      min: '20px',
      max: '26px',
    })}
  `
}

export default style;
