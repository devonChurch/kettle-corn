import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../headings';
import { createColor, colors, spacing } from '../../styles';
import styles from './styles';

const { Sform, Slabel, Sinput, StextArea, Sname } = styles;

const fieldPropTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  invalidMessage: PropTypes.node, // "string" || "bool", "null", etc
};

const fieldDefaultprops = {
  invalidMessage: false,
};

const Form = ({ children, handleSubmit }) => {
  return <Sform onSubmit={handleSubmit}>{children}</Sform>;
};

Form.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
};

const FormInput = ({ label, handleChange, value, type, invalidMessage }) => {
  const isPopulated = Boolean(value);
  const isInvalid = Boolean(invalidMessage);

  return (
    <Slabel>
      <Sinput
        type="text"
        name={label}
        value={value}
        isInvalid={isInvalid}
        isPopulated={isPopulated}
        onChange={e => handleChange(e.target.value)}
      />
      <Sname isPopulated={isPopulated} isInvalid={isInvalid}>
        {label}
      </Sname>
      <Text size="12px" color={['red']}>
        {isInvalid ? invalidMessage : '\u00A0'}
      </Text>
    </Slabel>
  );
};

FormInput.propTypes = fieldPropTypes;

const FormTextArea = ({ label, handleChange, value, type, invalidMessage }) => {
  const isPopulated = Boolean(value);
  const isInvalid = Boolean(invalidMessage);

  return (
    <Slabel>
      <StextArea
        type="text"
        rows="8"
        name={label}
        value={value}
        isInvalid={isInvalid}
        isPopulated={isPopulated}
        onChange={e => handleChange(e.target.value)}
      />
      <Sname isPopulated={isPopulated} isInvalid={isInvalid}>
        {label}
      </Sname>
      <Text size="12px" color={['red']}>
        {isInvalid ? invalidMessage : '\u00A0'}
      </Text>
    </Slabel>
  );
};

FormTextArea.propTypes = fieldPropTypes;

const form = { Form, FormInput, FormTextArea };

export { form as default, Form, FormInput, FormTextArea };
