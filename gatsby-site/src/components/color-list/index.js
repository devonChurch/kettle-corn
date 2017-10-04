import React from 'react';
import {HeadingThree} from '../headings';
import {Spacer} from '../scaffold';
import styles from './styles'

const {Slist, Sitem } = styles;

const createColorItem = ({heading, hex}) => {

  return <Sitem key={hex} hex={hex} type={heading}>{heading}</Sitem>

};

const ColorList = ({heading, options}) => {

  const items = Object.keys(options).map((key) => createColorItem({
    heading:key, hex: options[key]
  }));

  return (
    <Spacer padding={['medium', 0]}>
      <HeadingThree color={options.medium}>{heading}</HeadingThree>
      <Slist>{items}</Slist>
    </Spacer>
  );

};

export default ColorList;
