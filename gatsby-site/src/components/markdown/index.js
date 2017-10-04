import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import Link from 'gatsby-link';
import {H1, H2, H3} from '../headings';
import styles from './styles';

const {Swrapper} = styles;
const overrides = {

  h1: {
    component: H1,
    // props: {},
  },

  h2: {
    component: H2,
  },

  h3: {
    component: H3,
  },

  a: {
    component: Link,
  },

};

const Markdown = ({children}) => {

  return (
    <Swrapper>
      <MarkdownToJSX options={{overrides}}>
        {children}
      </MarkdownToJSX>
    </Swrapper>
  );

};

export default Markdown;
