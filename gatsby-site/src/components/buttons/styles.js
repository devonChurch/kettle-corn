import styled, {css} from 'styled-components';
import { rem as createRem } from 'polished'
import {createColor, spacing, speed, misc, dynamic, media} from '../../styles';

const {createDynamicSize, createDynamicFontSize, createDynamicPosition} = dynamic;
const borderWidth = 3;
const Sbutton = styled.div`

  &,
  > a {
    display: inline-block;
  }

  > a {
    border-radius: ${misc.radius};
    border: ${createRem(borderWidth)} solid ${({color}) => color || createColor('white')};
    color: ${({color}) => color || createColor('white')};
    font-weight: 900;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: ${speed.fast} opacity;

    ${({isLarge}) => {

      switch (true) {

        case isLarge:
          return createDynamicFontSize({
            min: '16px',
            max: '18px',
          });

        default:
          return css`
            font-size: ${createRem('14px')};
          `;
      }

    }}

    svg {
      opacity: 0;
      position: absolute;
      transform: translate(-100%, -50%);
      transition: ${speed.fast} opacity;
      ${({isLarge}) => {

        const size = isLarge ? '18px' : '12px';
        const position = isLarge ? ['50%', 'auto','auto', {min: '15px', max: '18px'}] : ['50%', 'auto','auto', {min: '6px', max: '12px'}];

        return `${createDynamicSize([size])}${createDynamicPosition(position)}`;

      }};
    }

    > * {
      transition: ${speed.fast} transform;
    }

    &:hover,
    &:focus {
      opacity: 0.75;

      ${media['>=medium']} {

        svg {
          opacity: 1;
        }

        > * {
          transform: translateX(${({isLarge}) => createRem(isLarge ? '11px' : '5px')});
        }
      }
    }
  }
`;

const Sprimary = Sbutton.extend`

  > a {
    background: ${({background}) => background || createColor('white')};
    border-color: ${({background}) => background || createColor('white')};
  }
`;

const Ssecondary= Sbutton.extend`


`;

const Stertiary = Sbutton.extend`

  > a {
    background: transparent;
    border: 0;
    color: ${({color}) => color};
    position: relative;

    &:after {
      border: ${createRem(borderWidth / 2)} solid currentColor;
      border-radius: ${createRem(borderWidth / 2)};
      content: '';
      display: block;
      position: absolute;
      transform: translate(-50%, ${createRem(borderWidth)});
      transition: ${speed.fast} width;
      width: 100%;
      will-change: width;
      ${createDynamicPosition(['auto', 'auto', 'smallest', '50%'])}
    }

    svg {
      left: -1px;
    }

    &:hover {

      ${media['>=medium']} {

        &:after {
          width: calc(100% + ${createRem('10px')});
        }
      }
    }
  }
`;

const Squaternary = Stertiary.extend`

  > a {
    font-size: ${createRem('16px')};
    font-weight: 500;
    text-transform: none;

    &:after {
      border-width: ${createRem('0.5px')} 0 0;
    }
  }
`;

const buttons = { Sprimary, Ssecondary, Stertiary, Squaternary };

export default buttons;
