import React from 'react';
import PropTypes from 'prop-types';
import MarkdownToJSX from 'markdown-to-jsx';
import Link from 'gatsby-link';
import { HeadingOne, HeadingTwo, HeadingThree, Text } from '../headings';
import { Color } from '../scaffold';
import { ButtonInline } from '../buttons';
import { createColor } from '../../styles';

const overrides = swatch => ({
  h1: {
    component: HeadingOne,
    props: {
      color: [swatch],
    },
  },

  h2: {
    component: HeadingTwo,
    props: {
      color: [swatch],
    },
  },

  h3: {
    component: HeadingThree,
    props: {
      color: [swatch],
    },
  },

  a: {
    component: ButtonInline,
    props: {
      color: [swatch],
    },
  },
});

const Markdown = ({ children, swatch }) => {
  return (
    <Color color={[swatch, 'darkest']}>
      <MarkdownToJSX options={{ overrides: overrides(swatch) }}>{children}</MarkdownToJSX>
    </Color>
  );
};

Markdown.propTypes = {
  children: PropTypes.node,
  swatch: PropTypes.string,
};

Markdown.defaultProps = {
  swatch: 'gray',
};

export default Markdown;
