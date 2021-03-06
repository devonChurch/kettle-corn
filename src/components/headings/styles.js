import styled, { css } from 'styled-components';
import { rem as createRem, stripUnit as createStrippedUnit } from 'polished';
import { createColor, spacing, media, breakpoints, dynamic } from '../../styles';

const { createDynamicFontSize } = dynamic;

const createFirstItems = (element, amount) => {
  return new Array(amount)
    .fill(0)
    .map((_, index) => `${element}:nth-of-type(${index})`)
    .join(', ');
};

const SheadingOne = styled.h1`
  color: ${({ color }) => (color ? createColor(...color) : 'inherit')};
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
  max-width: ${createRem(breakpoints.small)};

  ${createDynamicFontSize({
    min: '35px',
    max: '48px',
  })};

  &:after {
    background: ${({ color }) =>
      color ? createColor(...color) : createColor('misc', 'black', 0.5)};
    content: '';
    display: block;
    height: ${createRem('6px')};
    opacity: 0.2;
    width: ${createRem('56px')};
  }
`;

const style = {
  SheadingOne,

  SheadingTwo: SheadingOne.withComponent('h2').extend`
    font-weight: 400;
  `,

  SheadingThree: styled.h3`
    color: ${({ color }) => (color ? createColor(...color) : 'inherit')};
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    max-width: ${createRem(breakpoints.small)};

    ${createDynamicFontSize({
      min: '20px',
      max: '26px',
    })};
  `,

  Stext: styled.span`
    color: ${({ color }) => (color ? createColor(...color) : 'inherit')};
    display: ${({ display }) => display};
    font-weight: ${({ weight }) => weight || 'inherit'};
    font-size: ${({ size }) => (size ? createRem(size) : 'inherit')};
    max-width: ${createRem(breakpoints.medium)};
    text-align: ${({ align }) => align || 'left'};
  `,

  Sintroduction: SheadingOne.extend`
    max-width: inherit;

    ${createDynamicFontSize({
      min: '26px',
      max: '48px',
    })};

    br {
      display: none;

      ${media['>=large']} {
        display: block;
      }
    }
  `,
};

export default style;
