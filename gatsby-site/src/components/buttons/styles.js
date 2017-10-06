import styled, {css} from 'styled-components';
import { rem as createRem } from 'polished'
import {colors, spacing, misc, dynamic} from '../../styles';

const {createDynamicFontSize} = dynamic;
const Sbutton = styled.div`

  &,
  > a {
    display: inline-block;
  }

  > a {
    border-radius: ${misc.radius};
    border: 3px solid ${({color}) => color || colors.white};
    color: ${({color}) => color || colors.white};
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;

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
  }
`;

const Sprimary = Sbutton.extend`

  > a {
    background: ${({background}) => background || colors.white};
    border-color: ${({background}) => background || colors.white};
  }
`;

const Ssecondary= Sbutton.extend`

  > a {

  }
`;

const Stertiary = Sbutton.extend`

  > a {
    background: transparent;
    border: 0;
    color: ${({color}) => color || colors.gray.medium};
    position: relative;

    &:after {
      background: ${({color}) => color || colors.gray.medium};
      content: '';
      display: block;
      height: 3px;
      left: 0;
      position: absolute;
      right: 0;
      width: 100%;
    }
  }
`;

const buttons = { Sprimary, Ssecondary, Stertiary };

export default buttons;
