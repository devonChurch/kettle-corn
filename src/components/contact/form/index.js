import React from 'react';
import { config } from '../../../utils';
import { IconStandardTick, IconStandardCross, IconMiscLoader } from '../../icons';
import Presentation from './presentation';

class ContactForm extends React.Component {
  state = {
    formStatus: 'dormant', // dormant, attempted, sending, success, error
    name: '',
    email: '',
    message: '',
  };

  handleChange = key => value => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  handlePostSuccess = () => {
    this.setFormStatus('success');
  };

  handlePostError = () => {
    this.setFormStatus('error');
  };

  createStatusMessage = formStatus => {
    switch (formStatus) {
      case 'success':
        return {
          test: 'contact-form-success',
          color: ['green'],
          text: 'Great, we will be in touch soon',
          Icon: IconStandardTick,
        };

      case 'error':
        return {
          test: 'contact-form-error',
          color: ['red'],
          text:
            'Sorry, we have encountered an error. Please try again or use one of the other contact methods below',
          Icon: IconStandardCross,
        };

      case 'sending':
        return {
          test: 'contact-form-sending',
          color: ['blue'],
          text: 'Sending question',
          Icon: IconMiscLoader,
        };

      default:
        return {};
    }
  };

  createInvalidMessages = () => {
    const { formStatus, name, email, message } = this.state;

    return {
      name: !Boolean(name.trim()) && 'Please supply a contact name',
      email:
        !Boolean(email.trim() && /^[^ @]+@[^ @.]{1,63}(?:\.[^ @.]{1,63})*$/.test(email)) &&
        'A valid Email address is required',
      message: !Boolean(message.trim()) && 'Please supply a message',
    };
  };

  setFormStatus = value => {
    this.setState({
      ...this.state,
      formStatus: value,
    });
  };

  sendDataToServer = async () => {
    try {
      const { name, email, message } = this.state;
      const endpoint = config.endpoints.emailContactFormAlert;
      const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({ name, email, message }),
        headers: new Headers({
          'Content-type': 'text/plain',
        }),
      };
      const response = await fetch(endpoint, options);

      if (response.ok) {
        this.handlePostSuccess();
      } else {
        throw new Error('Post failed!');
      }
    } catch (error) {
      this.handlePostError();
    }
  };

  handleSubmit = e => {
    const invalidMessages = this.createInvalidMessages();
    const isValid = !Object.keys(invalidMessages).filter(key => Boolean(invalidMessages[key]))
      .length;

    if (isValid) {
      this.setFormStatus('sending');
      this.sendDataToServer();
    } else {
      this.setFormStatus('attempted');
    }

    e.preventDefault();
  };

  render = () => {
    const { state } = this;
    const { formStatus } = state;
    const isSubmitDisabled = formStatus === 'sending' || formStatus === 'success';
    const statusMessage = this.createStatusMessage(formStatus);
    const invalidMessages =
      (formStatus === 'attempted' || formStatus === 'error') && this.createInvalidMessages();

    return (
      <Presentation
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        values={state}
        isSubmitDisabled={isSubmitDisabled}
        statusMessage={statusMessage}
        invalidMessages={invalidMessages}
      />
    );
  };
}

export default ContactForm;
