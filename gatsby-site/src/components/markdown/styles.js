import styled from 'styled-components';
import { rem, stripUnit } from 'polished';
import {createColor} from '../../styles';

const Swrapper = styled.div`
  color: ${({color}) => createColor(color, 'darkest')};
`;

const styles = { Swrapper };

export default styles;
