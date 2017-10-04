import styled, {css} from 'styled-components';
import {padding as createPadding, margin as createMargin} from 'polished';
import {media, breakpoints} from '../../styles';
import {spacing} from '../../styles';

const sanatiseSpacing = (spacers, keys = []) => {

  return keys.map((key) => spacers[key] || key);

};

const createResponsiveSpacing = ({margin, padding}) => css`
  ${createMargin(...sanatiseSpacing(spacing.minimum, margin))}
  ${createPadding(...sanatiseSpacing(spacing.minimum, padding))}

  ${media['>=small']} {
    ${createMargin(...sanatiseSpacing(spacing.dynamic, margin))}
    ${createPadding(...sanatiseSpacing(spacing.dynamic, padding))}
  }

  ${media['>=large']} {
    ${createMargin(...sanatiseSpacing(spacing.maximum, margin))}
    ${createPadding(...sanatiseSpacing(spacing.maximum, padding))}
  }

`;

const scaffold = {

  Scontent: styled.div`
    margin: 0 auto;
    max-width: ${breakpoints.large};
  `,

  Sspacer: styled.div`
    background: ${({color}) => color || 'transparent'};
    display: ${({isInline}) => isInline ? 'inline-block' : 'block'};
    ${({margin, padding}) => createResponsiveSpacing({margin, padding})}
  `,

  SbuttonGroup: styled.div`

    > * {
      ${createResponsiveSpacing({margin: ['medium', 'small', 0]})}
    }
  `

}

export default scaffold;
