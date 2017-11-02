import React from 'react';
import PropTypes from 'prop-types';
import { createColor } from '../../../styles';
import styles from './styles';

const { Ssvg } = styles;

const propTypes = {
  color: PropTypes.array,
  isInline: PropTypes.bool,
};

const defaultProps = {
  color: ['misc', 'white'],
  isInline: false,
};

const IconStandardEmail = ({ color, isInline }) => {
  return (
    <Ssvg viewBox="0 0 26 26" color={color} isInline={isInline}>
      <path d="M24.6,5.2c-0.1-0.5-0.5-0.9-1-0.9H2.4c-0.5,0-1,0.5-1,1v15.3c0,0.6,0.4,1,1,1h21.3c0.6,0,1-0.4,1-1V5.4C24.6,5.3,24.6,5.3,24.6,5.2C24.6,5.2,24.6,5.3,24.6,5.2z M20.8,6.4L13,12.5L5.2,6.4H20.8z M3.4,19.6V7.4l9,7.1c0.4,0.3,0.9,0.3,1.2,0l9-7.1v12.2H3.4z" />
    </Ssvg>
  );
};

IconStandardEmail.propTypes = propTypes;
IconStandardEmail.defaultProps = defaultProps;

const IconStandardTwitter = ({ color, isInline }) => {
  return (
    <Ssvg viewBox="0 0 26 26" color={color} isInline={isInline}>
      <path d="M9.7,22.2c-4,0-7.1-1.9-7.2-2C2.1,20,1.9,19.5,2.1,19c0.2-0.4,0.6-0.7,1.1-0.7c1.5,0.2,2.7-0.1,3.6-0.5c-0.8-0.4-1.5-0.9-2-1.6c-2.8-3.7-1.4-10.7-1.3-11c0.1-0.4,0.4-0.7,0.8-0.8c0.4-0.1,0.8,0.1,1,0.4c2.1,2.7,4.8,3.6,6.8,3.9c0.1-2.8,2.4-5,5.1-5c1.5,0,3,0.7,4,1.9c1.3-0.1,2.4-1.1,2.4-1.1s0,2.4-1.2,4.4c0.1,1.7-0.1,7.3-5.8,11.2C14.4,21.5,12.1,22.2,9.7,22.2z M7.1,19.9c0.8,0.2,1.6,0.3,2.6,0.3c2,0,3.9-0.6,5.6-1.7c5.7-3.9,5-9.7,4.9-9.8c0-0.3-0.3-1.1-0.4-1.4c-0.6-1-1.6-1.6-2.7-1.6c-1.7,0-3.1,1.4-3.1,3.1c0,0.2,0,0.5,0.1,0.7c0.1,0.3,0,0.6-0.2,0.9c-0.2,0.2-0.5,0.4-0.8,0.4c-1.9-0.1-5.1-0.6-7.9-3.1c-0.2,2.1-0.2,5.5,1.2,7.4C7,16,7.9,16.4,9.2,16.5c0.4,0,0.7,0.3,0.9,0.6c0.1,0.4,0.1,0.8-0.2,1.1C9.4,18.7,8.4,19.5,7.1,19.9z" />
    </Ssvg>
  );
};

IconStandardTwitter.propTypes = propTypes;
IconStandardTwitter.defaultProps = defaultProps;

const IconStandardFacebook = ({ color, isInline }) => {
  return (
    <Ssvg viewBox="0 0 26 26" color={color} isInline={isInline}>
      <path d="M21.8,3.2H4.2c-0.6,0-1,0.4-1,1v17.7c0,0.6,0.4,1,1,1h17.7c0.6,0,1-0.4,1-1V4.2C22.8,3.6,22.4,3.2,21.8,3.2z M20.8,20.8h-5.5v-6.1h2.1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2.1V11c0-1,0.2-1.7,0.5-1.9c0.4-0.2,1.3,0.1,1.6,0.3c0.5,0.3,1.1,0.1,1.4-0.4c0.3-0.5,0.1-1.1-0.4-1.4c-0.2-0.1-2-1.1-3.6-0.3c-1,0.6-1.5,1.8-1.5,3.6v1.7h-1.9c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.9v6.1H5.2V5.2h15.7V20.8z" />
    </Ssvg>
  );
};

IconStandardFacebook.propTypes = propTypes;
IconStandardFacebook.defaultProps = defaultProps;

const IconStandardPhone = ({ color, isInline }) => {
  return (
    <Ssvg viewBox="0 0 26 26" color={color} isInline={isInline}>
      <path d="M20.6,1.5H5.4c-0.6,0-1,0.4-1,1v21.1c0,0.6,0.4,1,1,1h15.1c0.6,0,1-0.4,1-1V2.5C21.6,1.9,21.1,1.5,20.6,1.5z M19.6,22.5H6.4V3.5h3.4l0.8,1.2h4.6l0.8-1.2h3.4V22.5z" />
      <path d="M12.3,17.8c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7C13.3,17.4,12.7,17.4,12.3,17.8z" />
    </Ssvg>
  );
};

IconStandardPhone.propTypes = propTypes;
IconStandardPhone.defaultProps = defaultProps;

const IconStandardTick = ({ color, isInline }) => {
  return (
    <Ssvg viewBox="0 0 26 26" color={color} isInline={isInline}>
      <path d="M11.2,21.3c-0.2,0-0.4-0.1-0.6-0.2l-6.8-4.8C3.4,16,3.3,15.4,3.6,15c0.3-0.5,0.9-0.6,1.4-0.2l6,4.2l9.7-13.8c0.3-0.5,0.9-0.6,1.4-0.2c0.5,0.3,0.6,0.9,0.2,1.4L12.1,20.9C11.9,21.1,11.6,21.3,11.2,21.3z" />
    </Ssvg>
  );
};

IconStandardTick.propTypes = propTypes;
IconStandardTick.defaultProps = defaultProps;

const IconStandardCross = ({ color, isInline }) => {
  return (
    <Ssvg viewBox="0 0 26 26" color={color} isInline={isInline}>
      <path d="M14.4,13l6.4-6.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L13,11.6L6.6,5.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.4,6.4l-6.4,6.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6.4-6.4l6.4,6.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L14.4,13z" />
    </Ssvg>
  );
};

IconStandardCross.propTypes = propTypes;
IconStandardCross.defaultProps = defaultProps;

const icons = {
  IconStandardEmail,
  IconStandardTwitter,
  IconStandardFacebook,
  IconStandardPhone,
  IconStandardTick,
  IconStandardCross,
};

export {
  icons as default,
  IconStandardEmail,
  IconStandardTwitter,
  IconStandardFacebook,
  IconStandardPhone,
  IconStandardTick,
  IconStandardCross,
};
