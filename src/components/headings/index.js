import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spacer } from '../scaffold';
import Markdown from '../markdown';
import styles from './styles';

const { SheadingOne, SheadingTwo, SheadingThree, Stext, Sintroduction } = styles;

const propTypes = {
  children: PropTypes.node,
  color: PropTypes.array,
  isSpaceless: PropTypes.bool,
  id: PropTypes.string,
};

const createId = id => {
  return (
    id &&
    id
      .replace(/[^A-Z a-z&-]/g, '')
      .trim()
      .replace(/[ ]/g, '-')
      .toLowerCase()
  );
};

const HeadingOne = ({ children, color, isSpaceless, id }) => {
  return (
    <Spacer padding={[0, 0, isSpaceless ? 0 : 'large']}>
      <SheadingOne id={createId(id)} color={color}>
        {children}
      </SheadingOne>
    </Spacer>
  );
};

HeadingOne.propTypes = propTypes;

const HeadingTwo = ({ children, color, isSpaceless, id }) => {
  return (
    <Spacer padding={[0, 0, isSpaceless ? 0 : 'large']}>
      <SheadingTwo id={createId(id)} color={color}>
        {children}
      </SheadingTwo>
    </Spacer>
  );
};

HeadingTwo.propTypes = propTypes;

const HeadingThree = ({ children, color, isSpaceless, id }) => {
  return (
    <Spacer padding={[0, 0, isSpaceless ? 0 : 'medium']}>
      <SheadingThree id={createId(id)} color={color}>
        {children}
      </SheadingThree>
    </Spacer>
  );
};

HeadingThree.propTypes = propTypes;

const Text = ({ children, color, weight, display, align, size }) => {
  return (
    <Stext color={color} weight={weight} display={display} align={align} size={size}>
      {children}
    </Stext>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.array,
  weight: PropTypes.number,
  display: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.string,
};

Text.defaultProps = {
  display: 'inline',
};

const Introduction = ({ children, color }) => {
  return <Sintroduction color={color}>{children}</Sintroduction>;
};

const headings = { HeadingOne, HeadingTwo, HeadingThree, Text, Introduction };

export { headings as default, HeadingOne, HeadingTwo, HeadingThree, Text, Introduction };
