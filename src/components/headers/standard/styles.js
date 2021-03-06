import styled, { css } from 'styled-components';
import { rem as createRem } from 'polished';
import { speed } from '../../../styles';

const style = {
  Slogo: styled.div`
    max-width: ${createRem('100px')};
    min-width: ${createRem('80px')};
    width: 20vw;
  `,
};

export default style;
