import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import Link from 'gatsby-link';
import {HeadingOne, HeadingTwo, HeadingThree, Text} from '../headings';
import {ButtonInline} from '../buttons';
import styles from './styles';
import {createColor} from '../../styles';

const {Swrapper} = styles;
const overrides = (color) => ({

  h1: {
    component: HeadingOne,
    props: {
      color: createColor(color)
    },
  },

  h2: {
    component: HeadingTwo,
    props: {
      color: createColor(color)
    },
  },

  h3: {
    component: HeadingThree,
    props: {
      color: createColor(color)
    },
  },

  a: {
    component: ButtonInline,
    props: {
      color: createColor(color)
    },
  },

});

const Markdown = ({children, color = 'gray'}) => {

  return (
    <Swrapper color={color}>
      <MarkdownToJSX options={{ overrides: overrides(color)}}>
        {children}
      </MarkdownToJSX>
    </Swrapper>
  );

};

export default Markdown;
