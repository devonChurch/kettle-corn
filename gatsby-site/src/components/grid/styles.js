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

const SitemSixUp = styled.div`
  width: 50%;

  ${media['>=medium']} {
    width: 33%;
  }

  ${media['>=large']} {
    width: 16.6666666%;
  }
`;

const styles = { Swrapper, SitemThreeUp, SitemSixUp };

export default styles;
