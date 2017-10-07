import styled, {css} from 'styled-components';
import { rem as createRem } from 'polished'
import {createColor, spacing, misc, dynamic} from '../../styles';

const {createDynamicFontSize} = dynamic;
const Sbutton = styled.div`

  &,
  > a {
    display: inline-block;
  }

  > a {
    border-radius: ${misc.radius};
    border: 3px solid ${({color}) => color || createColor('white')};
    color: ${({color}) => color || createColor('white')};
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
    background: ${({background}) => background || createColor('white')};
    border-color: ${({background}) => background || createColor('white')};
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
    color: ${({color}) => color || createColor('gray', 'medium')};
    position: relative;

    &:after {
      background: ${({color}) => color || createColor('gray', 'medium')};
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
