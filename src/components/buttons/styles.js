import styled, { css } from 'styled-components';
import { rem as createRem } from 'polished';
import { createColor, spacing, speed, misc, dynamic, media } from '../../styles';

const { createDynamicSize, createDynamicFontSize, createDynamicPosition } = dynamic;
const Sbutton = styled.div`
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    outline: 0;
    padding: 0;
  }

  &,
  > a,
  > button {
    display: inline-block;
  }

  > a,
  > button {
    border-radius: ${misc.radius};
    border: ${misc.borderWidth} solid;
    border-color: ${({ color }) => createColor(...color)};
    color: ${({ color }) => createColor(...color)};
    font-weight: 900;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: ${speed.fast} opacity;

    ${({ isLarge }) => {
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
    }} svg {
      opacity: 0;
      position: absolute;
      transform: translate(-100%, -50%);
      transition: ${speed.fast} opacity;
      ${({ isLarge }) => {
        const size = isLarge ? '18px' : '12px';
        const position = isLarge
          ? ['50%', 'auto', 'auto', { min: '15px', max: '18px' }]
          : ['50%', 'auto', 'auto', { min: '6px', max: '12px' }];

        return `${createDynamicSize([size])}${createDynamicPosition(position)}`;
      }};
    }

    > * {
      transition: ${speed.fast} transform;
    }

    &:disabled {
      opacity: 0.25;
    }

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      opacity: 0.75;

      ${media['>=medium']} {
        svg {
          opacity: 1;
        }

        > * {
          transform: translateX(${({ isLarge }) => createRem(isLarge ? '11px' : '5px')});
        }
      }
    }
  }
`;

const Sprimary = Sbutton.extend`
  > a,
  > button {
    background: ${({ background }) => createColor(...background)};
    border-color: ${({ background }) => createColor(...background)};
  }
`;

const Ssecondary = Sbutton.extend``;

const Stertiary = Sbutton.extend`
  > a,
  > button {
    background: transparent;
    border: 0;
    color: ${({ color }) => createColor(...color)};
    position: relative;

    &:after {
      border-top: ${misc.borderWidth} solid currentColor;
      content: '';
      display: block;
      position: absolute;
      transform: translate(-50%, ${misc.borderWidth});
      transition: ${speed.fast} width;
      width: 100%;
      will-change: width;
      ${createDynamicPosition(['auto', 'auto', 'smallest', '50%'])};
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
  > a,
  > button {
    font-size: ${createRem('16px')};
    font-weight: 500;
    text-transform: none;

    &:after {
      border-width: ${createRem('1px')};
    }
  }
`;

const Sinline = styled.span`
  > a,
  > button {
    color: ${({ color }) => (color ? createColor(...color) : 'inherit')};
    transition: ${speed.fast} opacity;

    &:hover,
    &:focus {
      opacity: 0.75;
    }
  }
`;

const buttons = { Sprimary, Ssecondary, Stertiary, Squaternary, Sinline };

export default buttons;
