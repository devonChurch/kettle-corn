const Config = require('webpack-configurator');
const Webpack = require('webpack');

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.plugin('webpack-define', Webpack.DefinePlugin, [
    {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      APP_ENV: JSON.stringify(process.env.APP_ENV || 'production'),
    },
  ]);

  return config;
};
