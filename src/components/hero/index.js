import React from 'react';
import Link from 'gatsby-link';
import { Content, Spacer, Color } from '../scaffold';
import { spacing, misc } from '../../styles';
import styles from './styles';

const Hero = ({ children, background = ['blue', 'dark', 0], arrow, element, padding }) => {
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

export default Hero;
