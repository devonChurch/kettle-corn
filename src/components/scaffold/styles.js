import styled, { css } from 'styled-components';
import { padding as createPadding, margin as createMargin, rem as createRem } from 'polished';
import { media, breakpoints, spacing, dynamic, createColor } from '../../styles';

const {
  createDynamicPadding,
  createDynamicMargin,
  createDynamicSize,
  createDynamicMinWidth,
  createDynamicMaxWidth,
  createDynamicMinHeight,
  createDynamicMaxHeight,
} = dynamic;
const scaffold = {
  Spage: styled.div`
    min-height: 100vh;
  `,

  Scontent: styled.div`
    margin: 0 auto;
    max-width: ${breakpoints.large};
  `,

  Sspacer: styled.div`
    display: ${({ display }) => display};
    ${({ padding }) => createDynamicPadding(padding)} ${({ margin }) =>
        createDynamicMargin(margin)};
  `,

  Scolor: styled.div`
    background: ${({ background }) => (background ? createColor(...background) : 'transparent')};
    color: ${({ color }) => (color ? createColor(...color) : 'inherit')};
    display: ${({ display }) => display};
  `,

  Ssizer: styled.div`
    display: ${({ display }) => display};
    margin: ${({ isCenter }) => (isCenter ? 'auto' : '0')};
    ${({ size }) => createDynamicSize(size)} ${({ minWidth }) =>
        createDynamicMinWidth(minWidth)} ${({ maxWidth }) => createDynamicMaxWidth(maxWidth)} ${({
        minHeight,
      }) => createDynamicMinHeight(minHeight)} ${({ maxHeight }) =>
        createDynamicMaxHeight(maxHeight)};
  `,

  SbuttonGroup: styled.div`
    > * {
      ${createDynamicMargin(['medium', 'small', 0])};
    }
  `,

  SflexWrapper: styled.div`
    align-items: ${({ align }) => align};
    display: flex;
    flex-direction: ${({ direction }) => direction};
    flex-wrap: ${({ wrap }) => wrap};
    justify-content: ${({ justify }) => justify};
    ${({ direction }) => {
      switch (direction) {
        case 'column':
          return css`
            height: 100%;
          `;

        default:
          return css`
            width: 100%;
          `;
      }
    }};
  `,

  SflexItem: styled.div`
    flex-grow: ${({ grow }) => grow};
    order: ${({ order }) => order};
  `,
};

export default scaffold;
