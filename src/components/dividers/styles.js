import styled, { css } from 'styled-components';
import { rem as createRem, stripUnit as createStrippedUnit } from 'polished';
import { createColor, misc } from '../../styles';

const strokeWidth = `${createStrippedUnit(misc.borderWidth) / 2}rem`;

const styles = {
  Sdivider: styled.hr`
    border: ${strokeWidth} solid;
    border-color: ${({ background }) => createColor(...background)};
    border-radius: ${strokeWidth};
    border-left: 0;
    border-right: 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1200px;
    width: calc(100vw - 60px);
  `,
};

export default styles;
