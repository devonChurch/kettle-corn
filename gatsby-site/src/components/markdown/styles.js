import styled from 'styled-components';
import { rem, stripUnit } from 'polished';
import {breakpoints} from '../../styles';

const Swrapper = styled.div`
  max-width: ${stripUnit(breakpoints.large) * 0.75}rem;
`;

const styles = { Swrapper };

export default styles;
