import styled from 'styled-components';
import { rem as createRem } from 'polished';
import { createColor, dynamic, misc, speed } from '../../styles';

const { createDynamicPadding } = dynamic;

const Stile = styled.article`
  background: ${createColor('misc', 'white')};
  border: ${misc.borderWidth} solid;
  border-color: ${createColor('green', 'dark')};
  border-radius: ${misc.radius};
  ${createDynamicPadding(['medium'])};
`;

const Slogo = styled.img`
  display: block;
  margin: 0;
`;

const styles = { Stile, Slogo };

export default styles;
