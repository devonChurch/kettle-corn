import styled, { css } from 'styled-components';
import { rem as createRem } from 'polished';
import { createColor, dynamic, misc, speed } from '../../../styles';

const { createDynamicPadding, createDynamicMargin, createDynamicPosition } = dynamic;

const Swrapper = styled.div`
  height: 100%;
  ${createDynamicPadding(['small'])};
  position: relative;
  transition: transform ${speed.fast};

  &:hover,
  &:focus {
    transform: translateY(-${createRem('10px')});
  }

  > a {
    text-decoration: none;
  }
`;

const Stile = styled.article`
  background: ${createColor('misc', 'white')};
  border: ${misc.borderWidth} solid;
  border-color: ${({ swatch }) => createColor(swatch)};
  border-radius: ${misc.radius};
  height: 100%;
  ${createDynamicPadding(['medium'])};
`;

const Sbutton = styled.div`
  ${createDynamicMargin([0, 0, 'small', 'small'])};
  padding-left: ${misc.borderWidth}; // Border wodth offset.
  position: absolute;
  ${createDynamicPosition(['inherit', 'inherit', 'medium', 'medium'])};
`;

const styles = { Swrapper, Stile, Sbutton };

export default styles;
