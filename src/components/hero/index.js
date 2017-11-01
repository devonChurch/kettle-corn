import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Content, Spacer, Color } from '../scaffold';
import { spacing, misc } from '../../styles';
import styles from './styles';

const Hero = ({ children, background, arrow, element, padding }) => {
  const Swrapper = styles.createWrapper(element);

  return (
    <Color background={background}>
      <Spacer>
        <Content>
          <Swrapper arrow={arrow} background={background}>
            <Spacer padding={padding}>{children}</Spacer>
          </Swrapper>
        </Content>
      </Spacer>
    </Color>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  background: PropTypes.array,
  arrow: PropTypes.array,
  element: PropTypes.string,
  padding: PropTypes.array,
};

Hero.defaultProps = {
  background: ['blue', 'dark', 0],
};

export default Hero;
