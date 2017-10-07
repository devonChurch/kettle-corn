import styled, {css} from 'styled-components';
import {padding as createPadding, margin as createMargin, rem as createRem} from 'polished';
import {media, breakpoints, spacing, dynamic} from '../../styles';

const {createDynamicPadding, createDynamicMargin} = dynamic;
const scaffold = {

  Scontent: styled.div`
    margin: 0 auto;
    max-width: ${breakpoints.large};
  `,

  Sspacer: styled.div`
    background: ${({color}) => color || 'transparent'};
    display: ${({isInline}) => isInline ? 'inline-block' : 'block'};
    ${({padding}) => createDynamicPadding(padding)}
    ${({margin}) => createDynamicMargin(margin)}
    ${({width = []}) => {
      const {min, max} = width;
      return css`
        max-width: ${max ? createRem(max) : 'initial'};
        min-width: ${min ? createRem(min) : 'initial'};
      `;
    }}
  `,

  SbuttonGroup: styled.div`

    > * {
      ${createDynamicMargin(['medium', 'small', 0])}
    }
  `

}

export default scaffold;
