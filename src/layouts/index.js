import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import navigation from '../data/navigation/';
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
      <meta property="fb:app_id" content="363055947501662" />
      <meta property="og:url" content={`${config.siteEndpoint}${navigation.home.path}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Start reaching and engaging with more customers through smarter digital marketing"
      />
      <meta
        property="og:description"
        content="Talk to us about enhancing your business and find out what motivates your customer. We'll help with end-to-end data driven marketing, personalisation and insights to propel you forward"
      />
      <meta property="og:image" content={`${config.assetsEndpoint}/social/facebook-og.png`} />
      <meta property="og:image:alt" content="Enhance Digital | Digital Marketing Services" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Enhance Digital" />
      <meta property="og:locale" content="en" />
      {console.log(`enhance digital ${config.version}`)}
    </Helmet>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
