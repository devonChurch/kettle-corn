import styled, { css } from 'styled-components';
import { rem as createRem, stripUnit as createStrippedUnit } from 'polished';
import { createColor, misc } from '../../styles';

const strokeWidth = `${createStrippedUnit(misc.borderWidth) / 1.5}rem`;

const styles = {
  Sdivider: styled.hr`
    border: ${strokeWidth} solid;
    border-color: ${({ background }) => createColor(...background)};
    border-radius: 99999px;
    border-left: 0;
    border-right: 0;
    height: 0;
    margin: 0;
    max-width: 1200px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    width: calc(100vw - 60px);
  `,
};

export default styles;
