import React from 'react';
import {Text} from '../headings';
import {createColor, colors, spacing} from '../../styles';
import styles from './styles';

const {Sform, Slabel, Sinput, StextArea, Sname} = styles;

const Form = ({children, handleSubmit}) => {

  return (
    <Sform onSubmit={handleSubmit}>{children}</Sform>
  );

};

const FormInput = ({label, handleChange, value, type, invalidMessage}) => {

  const isPopulated = Boolean(value);
  const isInvalid = Boolean(invalidMessage);

  return (
    <Slabel>
      <Sinput type="text" name={label} value={value} isInvalid={isInvalid} isPopulated={isPopulated} onChange={(e) => handleChange(e.target.value.trim())}/>
      <Sname isPopulated={isPopulated} isInvalid={isInvalid}>{label}</Sname>
      <Text size="12px" color={createColor('red')}>{isInvalid ? invalidMessage : '\u00A0'}</Text>
    </Slabel>
  );

};

const FormTextArea = ({label, handleChange, value, type, invalidMessage}) => {

  const isPopulated = Boolean(value);
  const isInvalid = Boolean(invalidMessage);

  return (
    <Slabel>
      <StextArea type="text" name={label} value={value} isInvalid={isInvalid} isPopulated={isPopulated} onChange={(e) => handleChange(e.target.value.trim())}/>
      <Sname isPopulated={isPopulated} isInvalid={isInvalid}>{label}</Sname>
      <Text size="12px" color={createColor('red')}>{isInvalid ? invalidMessage : '\u00A0'}</Text>
    </Slabel>
  );

};

const form = {Form, FormInput, FormTextArea};

export {form as default, Form, FormInput, FormTextArea};
