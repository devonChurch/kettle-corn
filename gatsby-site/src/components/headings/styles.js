import styled, {css} from 'styled-components';
import { rem as createRem, stripUnit as createStrippedUnit } from 'polished'
import {createColor, spacing, media, breakpoints, dynamic} from '../../styles';

const {createDynamicFontSize} = dynamic;

const SheadingOne = styled.h1`
  color: ${({color}) => color || 'inherit'};
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
  max-width: ${createRem(breakpoints.small)};

  ${createDynamicFontSize({
    min: '35px',
    max: '48px',
  })}

  &:after {
    background: ${({color}) => color || createColor('misc', 'black', 0.5)};
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
    color: ${({color}) => color || 'inherit'};
    font-weight: 400; // 700;
    line-height: 1.4;
    margin: 0;
    max-width: ${createRem(breakpoints.small)};

    ${createDynamicFontSize({
      min: '20px',
      max: '26px',
    })}
  `,

  Stext: styled.span`
    color: ${({color}) => color || 'inherit'};
    display: ${({isBlock}) => isBlock ? 'inline-block' : 'inline'};
    font-weight: ${({weight}) => weight || 'inherit'};
    max-width: ${createRem(breakpoints.medium)};
  `,
}

export default style;
