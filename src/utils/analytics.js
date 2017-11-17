import config from './config';

const start = () => {
  const window = window || {};
  if (config.isProduction && window) {
    console.log('start analytics');
    const { dataLayer = [] } = window;

    dataLayer.push('js', new Date());
    dataLayer.push('config', 'UA-108251862-1');
  }
};

const analytics = { start };

export default analytics;
