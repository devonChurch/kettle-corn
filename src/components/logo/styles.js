import styled, { css } from 'styled-components';
import { getLuminance } from 'polished';
import { createColor } from '../../styles';

const createContrastingFill = ({ color, background, light, medium, dark }) => {
  const luminance = getLuminance(background);
  const darkThreshold = 0.25;
  const lightThreshold = 0.8;

  switch (true) {
    case luminance < darkThreshold:
      return dark;

    case luminance >= darkThreshold && luminance < lightThreshold:
      return medium;

    default:
      return light;
  }
};

const Senhance = styled.g`
  fill: ${({ color, background }) =>
    createContrastingFill({
      color,
      background: createColor(...background, 'Logo'),
      light: createColor(color),
      medium: createColor('misc', 'white'),
      dark: createColor('misc', 'white'),
    })};
`;

const Sdigital = styled.g`
  fill: ${({ color, background }) =>
    createContrastingFill({
      color,
      background: createColor(...background, 'Logo'),
      light: createColor(color, 'darkest'),
      medium: createColor('misc', 'black', 0.5),
      dark: createColor('misc', 'white', 0.4),
    })};
`;

const Sextra = styled.g`
  fill: ${({ color, background }) =>
    createContrastingFill({
      color,
      background: createColor(...background, 'Logo'),
      light: createColor('gray', 'lightest'),
      medium: createColor('misc', 'white', 0.25),
      dark: createColor('misc', 'black', 0.25),
    })};
`;

const styles = {
  Senhance,
  Sdigital,
  Sextra,
};

export default styles;
