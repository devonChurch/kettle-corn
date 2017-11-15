import React from 'react';
import { mount, shallow } from 'enzyme';
import ContactForm from './index';

describe('Validation', () => {
  test('should set each input ("name", "email", "message") to be invalid when no value is given', () => {
    const wrapper = mount(<ContactForm />);
    const submit = wrapper.find('button[type="submit"]');

    submit.simulate('click');

    const text = wrapper.text();

    expect(text).toEqual(expect.stringContaining('Please supply a contact name'));
    expect(text).toEqual(expect.stringContaining('A valid Email address is required'));
    expect(text).toEqual(expect.stringContaining('Please supply a message'));
  });

  test('should require a valid email address', () => {
    const wrapper = mount(<ContactForm />);
    const submit = wrapper.find('button[type="submit"]');

    wrapper.setState({ email: 'invalid-email.com' });
    submit.simulate('click');

    const text = wrapper.text();

    expect(text).toEqual(expect.stringContaining('A valid Email address is required'));
  });

  test('should validate for when correct values are supplied', () => {
    const wrapper = mount(<ContactForm />);
    const submit = wrapper.find('button[type="submit"]');

    wrapper.setState({
      name: 'Mr Test',
      email: 'test@test.com',
      message: 'Test',
    });
    submit.simulate('click');

    const text = wrapper.text();

    expect(text).not.toEqual(expect.stringContaining('Please supply a contact name'));
    expect(text).not.toEqual(expect.stringContaining('A valid Email address is required'));
    expect(text).not.toEqual(expect.stringContaining('Please supply a message'));
  });
});

describe('Sending submission', () => {
  const wrapper = mount(<ContactForm />);
  wrapper.setState({
    formStatus: 'sending',
    name: 'Mr Test',
    email: 'test@test.com',
    message: 'Test',
  });

  test('should disable the submit button', () => {
    const submit = wrapper.find('button[type="submit"][disabled]');

    expect(submit.html()).toEqual(expect.stringContaining('disabled'));
  });
  test('should show the sending message', () => {
    const message = wrapper.find('[data-test="contact-form-sending"]');

    expect(message.exists()).toBeTruthy();
  });
});

describe('Submit success', () => {
  const wrapper = mount(<ContactForm />);
  wrapper.setState({
    formStatus: 'success',
    name: 'Mr Test',
    email: 'test@test.com',
    message: 'Test',
  });

  test('should disable the submit button', () => {
    const submit = wrapper.find('button[type="submit"][disabled]');

    expect(submit.html()).toEqual(expect.stringContaining('disabled'));
  });
  test('should show the success message', () => {
    const message = wrapper.find('[data-test="contact-form-success"]');

    expect(message.exists()).toBeTruthy();
  });
});

describe('Submit error', () => {
  const wrapper = mount(<ContactForm />);
  wrapper.setState({
    formStatus: 'error',
    name: 'Mr Test',
    email: 'test@test.com',
    message: 'Test',
  });

  test('should enable the submit button', () => {
    const submit = wrapper.find('button[type="submit"]');

    expect(submit.html()).not.toEqual(expect.stringContaining('disabled'));
  });
  test('should show the error message', () => {
    const message = wrapper.find('[data-test="contact-form-error"]');

    expect(message.exists()).toBeTruthy();
  });
});
