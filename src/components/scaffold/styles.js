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
    background: ${({ color }) => color || 'transparent'};
    display: ${({ isInline }) => (isInline ? 'inline-block' : 'block')};
    ${({ padding }) => createDynamicPadding(padding)} ${({ margin }) =>
        createDynamicMargin(margin)};
  `,

  createScolor: element => styled[element]`
    background: ${({ background }) => (background ? createColor(...background) : 'transparent')};
    color: ${({ color }) => (color ? createColor(...color) : 'inherit')};
    display: ${({ display }) => display || 'inherit'};
  `,

  Ssizer: styled.div`
    background: ${({ color }) => color || 'transparent'};
    display: ${({ isInline }) => (isInline ? 'inline-block' : 'block')};
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
    align-items: ${({ align }) => align || 'flex-start'};
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
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
    flex-grow: ${({ grow }) => grow || 0};
    order: ${({ order }) => order || 0};
  `,
};

export default scaffold;
