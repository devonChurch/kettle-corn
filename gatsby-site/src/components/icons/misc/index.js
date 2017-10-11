import React from 'react';
import {createColor} from '../../../styles';
import styles from './styles';

const {Ssvg} = styles;

const IconMiscArrow = ({color = createColor('misc', 'white'), isInline = false}) => {

  return (
    <Ssvg viewBox="0 0 14 14" fill={color} isInline={isInline}>

      <polygon points="4.9,1.5 3.2,3.2 7.4,7 3.2,10.8 4.9,12.5 10.8,7 "/>

    </Ssvg>
  );

};

const icons = {
  IconMiscArrow
};

export {icons as default, IconMiscArrow};
