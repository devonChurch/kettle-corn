import React from 'react';
import PropTypes from 'prop-types';
import MarkdownToJSX from 'markdown-to-jsx';
import Link from 'gatsby-link';
import { HeadingOne, HeadingTwo, HeadingThree, Text } from '../headings';
import { Color } from '../scaffold';
import { ButtonInline } from '../buttons';
import { createColor } from '../../styles';

const overrides = color => ({
  h1: {
    component: HeadingOne,
    props: {
      color: createColor(color),
    },
  },

  h2: {
    component: HeadingTwo,
    props: {
      color: createColor(color),
    },
  },

  h3: {
    component: HeadingThree,
    props: {
      color: createColor(color),
    },
  },

  a: {
    component: ButtonInline,
    props: {
      color: createColor(color),
    },
  },
});

const Markdown = ({ children, color }) => {
  return (
    <Color color={[color, 'darkest']}>
      <MarkdownToJSX options={{ overrides: overrides(color) }}>{children}</MarkdownToJSX>
    </Color>
  );
};

Markdown.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

Markdown.defaultProps = {
  color: 'gray',
};

export default Markdown;
