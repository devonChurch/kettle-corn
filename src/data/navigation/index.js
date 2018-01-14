import { config } from '../../utils';

const home = {
  name: 'Home',
  path: '/',
};

const services = {
  name: 'Services',
  path: '/services',
};

const contact = {
  name: 'Talk to us',
  path: '/contact',
};

const styleguide = {
  name: 'Style Guide',
  path: '/styleguide',
};

const main = config.isDevelopment ? [services, contact, styleguide] : [services, contact];

const navigation = { home, services, contact, styleguide, main };

export default navigation;
