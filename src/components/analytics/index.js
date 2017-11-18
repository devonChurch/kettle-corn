import React from 'react';
import { config } from '../../utils';

class Analytics extends React.Component {
  // We only want to run Google Analytics when we are in an "live" environment using
  // a "production" build. This is important for two reasons:
  //
  // + Only log relevant analytics for the application state we care about
  //
  // + Do not let Google Analytics reference the "window" object when in a Node.js
  //   environment as it will throw and error.
  isRelevant = (() => {
    let isLive = false;

    try {
      const { origin = '' } = window.location;

      isLive = /enhancedigital.co.nz/.test(origin);
    } catch (e) {}

    return isLive && config.isProduction;
  })();

  componentDidMount = () => {
    if (this.isRelevant) {
      console.log('start analytics');
      const { dataLayer = [] } = window;
      dataLayer.push('js', new Date());
      dataLayer.push('config', 'UA-108251862-1');
    }
  };

  render = () => {
    console.log('isRelevant', this.isRelevant);

    return (
      this.isRelevant && (
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108251862-1" />
      )
    );
  };
}

export default Analytics;
