import styled, {css} from 'styled-components';
import {padding as createPadding, margin as createMargin, rem as createRem} from 'polished';
import {media, breakpoints, spacing, dynamic} from '../../../styles';

const icons = {

  Ssvg: styled.svg`
    display: ${({isInline}) => isInline ? 'inline-block' : 'block'};
    fill: ${({color}) => color};
  `,

}

export default icons;
