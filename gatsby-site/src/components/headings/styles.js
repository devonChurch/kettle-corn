import styled, {css} from 'styled-components';
import { rem, stripUnit } from 'polished'
import {colors, spacing, media, breakpoints} from '../../styles';

const itemSize = rem('100px');
const {gray} = colors;

const createFontSizes = ({minimum, dynamic, maximum}) => css`
  font-size: ${minimum};

  ${media['>=medium']} {
    font-size: ${dynamic};
  }

  ${media['>=large']} {
    font-size: ${maximum};
  }
`;

// const createFontSizes = ({max, breakpoint}) => {
//
//   const multiplier = viewportMultiplyer[breakpoint];
//   const vwValue =
//   const base =
//
//   return css`
//     font-size: ${rem(base)};
//
//     ${media[`>=${breakpoint}`]} {
//       font-size: ${vwValue};
//     }
//
//     ${media['>=large']} {
//       font-size: ${max};
//     }
//   `;
//
// }

const SheadingOne = styled.h1`
  color: ${(props) =>  props.color || gray.light};
  font-weight: 700;
  margin: 0;
  max-width: ${stripUnit(breakpoints.large) * 0.5}rem;

  ${createFontSizes({
    minimum: rem('39.6px'),
    dynamic: '4.4vw',
    maximum: rem('52.8px'),
  })}

  &:after {
    background: ${({color}) => color || gray.light};
    content: '';
    display: block;
    height: ${rem('6px')};
    opacity: 0.2;
    width: ${rem('56px')};
  }
`;

const style = {

  SheadingOne: SheadingOne,

  SheadingTwo: SheadingOne.withComponent('h2').extend`
    font-weight: 300;
  `,

  SheadingThree: styled.h3`
    color: ${(props) => props.color || gray.light};
    font-weight: 700;
    margin: 0;
    max-width: ${stripUnit(breakpoints.large) * 0.5}rem;

    ${createFontSizes({
      minimum: rem('19.8px'),
      dynamic: '2.2vw',
      maximum: rem('26.4px')
    })}
  `
}

export default style;
