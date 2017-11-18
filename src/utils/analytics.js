import config from './config';

// We only want to run Google Analytics when we are in an "live" environment using
// a "production" build. This is important for two reasons:
//
// + Only log relevant analytics for the application state we care about
//
// + Do not let Google Analytics reference the "window" object when in a Node.js
//   environment as it will throw and error.
const isRelevant = (() => {
  let isLive = false;

  try {
    const { origin = '' } = window.location;

    isLive = /enhancedigital.co.nz/.test(origin);
  } catch (e) {}

  return isLive && config.isProduction;
})();

const createScript = () => {
  const script = document.createElement('script');

  script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-108251862-1';
  script.async = true;

  document.body.appendChild(script);
};

const register = () => {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push(['js', new Date()]);
  dataLayer.push(['config', 'UA-108251862-1']);
};

const start = () => {
  if (isRelevant) {
    console.log('start analytics');
    createScript();
    register();
  }
};

const analytics = { start };

export default analytics;
