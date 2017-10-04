import React from 'react';
import {spacing} from '../../styles';
import styles from './styles';

const {Scontent, Sspacer, SbuttonGroup} = styles;

const Spacer = ({children, color, margin, padding, isInline = false}) => {

  return (
    <Sspacer color={color} margin={margin} padding={padding} isInline={isInline}>
      {children}
    </Sspacer>
  );

};

const Content = ({children, color}) => {

  return (
    <Scontent color={color}>
      <Spacer padding={[0, 'medium']}>
        {children}
      </Spacer>
    </Scontent>
  );

};


const ButtonGroup = ({children}) => {

  return (
    <Spacer margin={['-medium', 0, 0, '-small']}>
      <SbuttonGroup>
        {children}
      </SbuttonGroup>
    </Spacer>
  );

};

const scaffold = {Content, Spacer, ButtonGroup};

export {scaffold as default, Content, Spacer, ButtonGroup};
