const services = {
  name: 'Services',
  path: '/services'
};

const contact = {
  name: 'Talk to us',
  path: '/contact'
};

const styleguide = {
  name: 'Style Guide',
  path: '/styleguide'
};

const main = [services, contact];

const navigation = {services, contact, styleguide, main};

export default navigation;
