import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const { Sdivider } = styles;

const Divider = ({ background }) => {
  return (
    <div>
      <Sdivider background={background} />
    </div>
  );
};

Divider.prototypes = {
  background: PropTypes.array,
};

Divider.defaultProps = {
  background: ['gray'],
};

export default Divider;
