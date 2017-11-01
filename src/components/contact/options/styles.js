import styled, { css } from 'styled-components';
import { rem as createRem } from 'polished';
import { createColor, spacing, media, breakpoints, dynamic } from '../../../styles';

const { createDynamicSize } = dynamic;

const style = {
  Sicon: styled.div`
    ${createDynamicSize(['auto', { min: '20px', max: '30px' }])};
  `,
};

export default style;
