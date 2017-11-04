import styled, { css } from 'styled-components';
import { padding as createPadding, margin as createMargin, rem as createRem } from 'polished';
import { media, breakpoints, spacing, dynamic, createColor } from '../../../styles';

const icons = {
  Ssvg: styled.svg`
    display: ${({ display }) => display};
    fill: ${({ color }) => createColor(...color)};
  `,
};

export default icons;
