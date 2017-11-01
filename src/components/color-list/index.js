import React from 'react';
import PropTypes from 'prop-types';
import createCapitalize from 'lodash.capitalize';
import { HeadingThree } from '../headings';
import { Spacer } from '../scaffold';
import styles from './styles';

const { Slist, Sitem } = styles;

const ColorItem = ({ heading, hex }) => {
  return (
    <Sitem key={hex} hex={hex}>
      {createCapitalize(heading)}
    </Sitem>
  );
};

ColorItem.propTypes = {
  heading: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
};

const ColorList = ({ heading, options }) => {
  const items = Object.keys(options).map(key => (
    <ColorItem key={key} heading={key} hex={options[key]} />
  ));

  return (
    <Spacer padding={['medium', 0]}>
      <HeadingThree color={options.medium}>{createCapitalize(heading)}</HeadingThree>
      <Slist>{items}</Slist>
    </Spacer>
  );
};

ColorList.propTypes = {
  heading: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ColorList;
