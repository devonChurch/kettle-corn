import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { config, analytics } from '../utils';

// analytics.start();

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>Enhance Digital | Digital Marketing Services</title>
      <meta
        name="description"
        content="Talk to us about enhancing the experience for your customers online. Grow your business with digital marketing, website analytics and engagement tools"
      />
      <link rel="apple-touch-icon" href="icon.png" />
      <meta
        name="Enhance Digital version"
        value={config.version}
        data-test="enhance-digital-version"
      />
      {console.log(`enhance digital ${config.version}`)}
    </Helmet>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
