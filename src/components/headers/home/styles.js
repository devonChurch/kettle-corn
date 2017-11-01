import styled, { css } from 'styled-components';
import { rem as createRem } from 'polished';

const style = {
  Slogo: styled.div`
    max-width: ${createRem('380px')};
    min-width: ${createRem('250px')};
    width: 75vw;
  `,
};

export default style;
