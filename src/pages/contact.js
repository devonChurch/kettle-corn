import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import { createColor, colors, spacing } from '../styles';
import services from '../data/services';
import { Page, Content, Spacer, Sizer, ButtonGroup, Flexer } from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import { IconStandardTick, IconStandardCross, IconMiscLoader } from '../components/icons';
import LogoWithText, { LogoNoText } from '../components/logo';
import { HeadingOne, HeadingTwo, HeadingThree, Text } from '../components/headings';
import { ButtonSubmit } from '../components/buttons';
import HeaderStandard from '../components/headers/standard';
import FooterStandard from '../components/footers/standard';
import ServicesArticle from '../components/services/article';
import ContactOptions from '../components/contact/options';
import { Form, FormInput, FormTextArea } from '../components/form';

const Presentation = ({
  handleSubmit,
  handleChange,
  values,
  isSubmitDisabled,
  statusMessage,
  invalidMessages,
}) => (
  <Page>
    <HeaderStandard title="Talk to us" background={['blue']} />

    <main>
      <Spacer padding={['largest', 0]}>
        <Content>
          <HeadingTwo color={createColor('blue')}>
            <Text color={createColor('gray', 'light')}>We love working with</Text>{' '}
            <Text weight={700}>local businesses</Text>
          </HeadingTwo>
          <Text isBlock color={createColor('blue', 'darkest')}>
            Contact us to talk about your growing your digital presence today.
          </Text>

          <Spacer padding={['medium', 0, 'largest']}>
            <Form handleSubmit={handleSubmit}>
              <FormInput
                label="Name"
                type="text"
                value={values.name}
                handleChange={handleChange('name')}
                invalidMessage={invalidMessages.name}
              />
              <FormInput
                label="Email"
                type="text"
                value={values.email}
                handleChange={handleChange('email')}
                invalidMessage={invalidMessages.email}
              />
              <FormTextArea
                label="Message"
                value={values.message}
                handleChange={handleChange('message')}
                invalidMessage={invalidMessages.message}
              />

              <ButtonSubmit handleClick={handleSubmit} isDisabled={isSubmitDisabled}>
                Send question
              </ButtonSubmit>

              {Boolean(statusMessage.color && statusMessage.text && statusMessage.Icon) && (
                <Spacer padding={['medium', 0, 0]}>
                  <Flexer>
                    {({ Wrapper, Item }) => (
                      <Wrapper align="center">
                        <Item>
                          <Sizer width="3vw" minWidth="20px" maxWidth="30px">
                            <statusMessage.Icon color={statusMessage.color} />
                          </Sizer>
                        </Item>
                        <Item>
                          <Spacer padding={[0, 0, 0, 'small']}>
                            <Text color={statusMessage.color}>{statusMessage.text}</Text>
                          </Spacer>
                        </Item>
                      </Wrapper>
                    )}
                  </Flexer>
                </Spacer>
              )}
            </Form>
          </Spacer>

          <HeadingTwo color={createColor('blue')}>
            <Text color={createColor('gray', 'light')}>Other ways to</Text>{' '}
            <Text weight={700}>talk to us</Text>
          </HeadingTwo>
          <ContactOptions color={createColor('blue')} />
        </Content>
      </Spacer>
    </main>
  </Page>
);

class ServicesPage extends React.Component {
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

    // setTimeout(() => {
    //
    //   this.setFormStatus('dormant');
    //   this.handleChange('name')('');
    //   this.handleChange('email')('');
    //   this.handleChange('message')('');
    //
    // }, 5000);
  };

  handlePostError = () => {
    this.setFormStatus('error');
  };

  createStatusMessage = formStatus => {
    switch (formStatus) {
      case 'success':
        return {
          color: createColor('green'),
          text: 'Great, we will be in touch soon',
          Icon: IconStandardTick,
        };

      case 'error':
        return {
          color: createColor('red'),
          text:
            'Sorry, we have encountered an error. Please try again or use one of the other contact methods below',
          Icon: IconStandardCross,
        };

      case 'sending':
        return {
          color: createColor('blue'),
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
      const endpoint =
        'https://57dina5fih.execute-api.us-east-1.amazonaws.com/dev/email-contact-form-alert';
      const config = {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({ name, email, message }),
        headers: new Headers({
          'Content-type': 'text/plain',
        }),
      };
      const response = await fetch(endpoint, config);

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

export default ServicesPage;
