import styled, {css} from 'styled-components';
import {media} from '../../styles';

const Swrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SitemThreeUp = styled.div`
  width: 100%;

  ${media['>=medium']} {
    width: 50%;
  }

  ${media['>=large']} {
    width: 33.33%;
  }
`;

const styles = { Swrapper, SitemThreeUp };

export default styles;
