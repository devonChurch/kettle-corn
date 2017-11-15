console.log('setting up Jest configuration');

// require('babel-core').transform('code', {
//   presets: ['babel-preset-env', 'babel-preset-react', 'jest'],
//   plugins: ['transform-es2015-modules-commonjs', 'transform-class-properties'],
// });

require('babel-polyfill');

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
