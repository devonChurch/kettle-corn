import React from 'react';
import Link from 'gatsby-link';
import {Content, Spacer} from '../scaffold';
import {colors, spacing, misc} from '../../styles';
import styles from './styles';

const Hero = ({children, color, arrow, element, padding}) => {

  const Swrapper = styles.createWrapper(element);

  return (
    <Spacer color={color}>
      <Content>
        <Swrapper arrow={arrow} color={color}>
          <Spacer padding={padding}>
            {children}
          </Spacer>
        </Swrapper>
      </Content>
    </Spacer>
  );

};

export default Hero;
