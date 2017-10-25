import React from 'react';
import firstLetterCaps from 'lodash.capitalize';
import {HeadingThree} from '../headings';
import {Spacer} from '../scaffold';
import styles from './styles'

const {Slist, Sitem } = styles;

const createColorItem = ({heading, hex}) => {

  return <Sitem key={hex} hex={hex}>{firstLetterCaps(heading)}</Sitem>

};

const ColorList = ({heading, options}) => {

  const items = Object.keys(options).map((key) => createColorItem({
    heading:key, hex: options[key]
  }));

  return (
    <Spacer padding={['medium', 0]}>
      <HeadingThree color={options.medium}>{firstLetterCaps(heading)}</HeadingThree>
      <Slist>{items}</Slist>
    </Spacer>
  );

};

export default ColorList;
