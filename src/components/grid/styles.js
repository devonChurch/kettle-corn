import styled, {css} from 'styled-components';
import {media} from '../../styles';

const Swrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SitemTwoUp = styled.div`
  width: 100%;

  ${media['>=medium']} {
    width: 50%;
  }

  ${media['>=large']} {

    &:nth-child(odd) {
      width: 33.33%;
    }

    &:nth-child(even) {
      width: 66.66%;
    }
  }
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

const SitemFourUp = styled.div`
  width: 100%;

  ${media['>=medium']} {
    width: 50%;
  }

  ${media['>=large']} {
    width: 25%;
  }

`;

const SitemSixUp = styled.div`
  width: 100%;

  ${media['>=small']} {
    width: 50%;
  }

  ${media['>=medium']} {
    width: 33%;
  }

  ${media['>=large']} {
    width: 16.6666666%;
  }
`;

const styles = { Swrapper, SitemTwoUp, SitemThreeUp, SitemFourUp, SitemSixUp };

export default styles;
