import styled from 'styled-components';
import { rem as createRem } from 'polished';
import { createColor, dynamic, misc, speed, colors } from '../../styles';

const { createDynamicPadding } = dynamic;

const Stile = styled.article`
  background: ${createColor('misc', 'white')};
  border: ${misc.borderWidth} solid;
  border-color: ${createColor('blue', 'lightest')};
  border-radius: ${misc.radius};
  ${createDynamicPadding(['medium'])};
`;

const Slogo = styled.img`
  display: block;
  margin: 0;
  transition: ${speed.fast};
  transition-property: opacity, transform;
`;

const Sbutton = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  a {
    opacity: 0;

    // We need to create focus states for accessibility purposes. In that regard
    // the <a /> is too far down to target the corresponding logo <img /> so instead
    // we create a pseudo element to cover the logo ONLY when focused via keyboard.

    &:before {
      background: ${colors.misc.white};
      content: '';
      display: block;
      height: 1000%;
      left: -450%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: -450%;
      width: 1000%;
      z-index: -1;
    }

    &:focus {
      opacity: 1 !important;

      &:before {
        opacity: 0.9;
      }
    }
  }
`;

const Sinteraction = styled.div`
  overflow: hidden;
  position: relative;

  &:hover,
  &:focus {
    img {
      opacity: 0.1;
      transform: scale(0.8);

      + * a {
        opacity: 1;
      }
    }
  }
`;

const styles = { Stile, Slogo, Sbutton, Sinteraction };

export default styles;
