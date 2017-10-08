import styled, {css} from 'styled-components';
import {padding as createPadding, margin as createMargin, rem as createRem} from 'polished';
import {media, breakpoints, spacing, dynamic} from '../../styles';

const {createDynamicPadding, createDynamicMargin, createDynamicSize, createDynamicMinWidth, createDynamicMaxWidth, createDynamicMinHeight, createDynamicMaxHeight} = dynamic;
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
  `,

  Ssizer: styled.div`
    background: ${({color}) => color || 'transparent'};
    display: ${({isInline}) => isInline ? 'inline-block' : 'block'};
    margin: ${({isCenter}) => isCenter ? 'auto' : '0'};
    ${({size}) => createDynamicSize(size)}
    ${({minWidth}) => createDynamicMinWidth(minWidth)}
    ${({maxWidth}) => createDynamicMaxWidth(maxWidth)}
    ${({minHeight}) => createDynamicMinHeight(minHeight)}
    ${({maxHeight}) => createDynamicMaxHeight(maxHeight)}
  `,

  SbuttonGroup: styled.div`

    > * {
      ${createDynamicMargin(['medium', 'small', 0])}
    }
  `

}

export default scaffold;
