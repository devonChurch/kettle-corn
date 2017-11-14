import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import { createColor, colors, spacing } from '../styles';
import services from '../data/services';
import { config } from '../utils';
import { Page, Content, Spacer, Sizer, ButtonGroup, Flexer, Test } from '../components/scaffold';
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
import ContactForm from '../components/contact/form';
import ContactOptions from '../components/contact/options';
import { Form, FormInput, FormTextArea } from '../components/form';

const ContactPage = () => (
  <Page>
    <HeaderStandard title="Talk to us" background={['blue']} />

    <main>
      <Spacer padding={['largest', 0]}>
        <Content>
          <HeadingTwo color={['blue']}>
            <Text color={['gray', 'light']}>We love working with</Text>{' '}
            <Text weight={700}>local businesses</Text>
          </HeadingTwo>
          <Text display="block" color={['blue', 'darkest']}>
            Contact us to talk about your growing your digital presence today.
          </Text>

          <Spacer padding={['medium', 0, 'largest']}>
            <ContactForm />
          </Spacer>

          <HeadingTwo color={['blue']}>
            <Text color={['gray', 'light']}>Other ways to</Text>{' '}
            <Text weight={700}>talk to us</Text>
          </HeadingTwo>
          <ContactOptions swatch={['blue']} />
        </Content>
      </Spacer>
    </main>
  </Page>
);

// class ContactPage extends React.Component {
//   state = {
//     formStatus: 'dormant', // dormant, attempted, sending, success, error
//     name: '',
//     email: '',
//     message: '',
//   };

//   handleChange = key => value => {
//     this.setState({
//       ...this.state,
//       [key]: value,
//     });
//   };

//   handlePostSuccess = () => {
//     this.setFormStatus('success');
//   };

//   handlePostError = () => {
//     this.setFormStatus('error');
//   };

//   createStatusMessage = formStatus => {
//     switch (formStatus) {
//       case 'success':
//         return {
//           test: 'contact-form-success',
//           color: ['green'],
//           text: 'Great, we will be in touch soon',
//           Icon: IconStandardTick,
//         };

//       case 'error':
//         return {
//           test: 'contact-form-error',
//           color: ['red'],
//           text:
//             'Sorry, we have encountered an error. Please try again or use one of the other contact methods below',
//           Icon: IconStandardCross,
//         };

//       case 'sending':
//         return {
//           test: 'contact-form-sending',
//           color: ['blue'],
//           text: 'Sending question',
//           Icon: IconMiscLoader,
//         };

//       default:
//         return {};
//     }
//   };

//   createInvalidMessages = () => {
//     const { formStatus, name, email, message } = this.state;

//     return {
//       name: !Boolean(name.trim()) && 'Please supply a contact name',
//       email:
//         !Boolean(email.trim() && /^[^ @]+@[^ @.]{1,63}(?:\.[^ @.]{1,63})*$/.test(email)) &&
//         'A valid Email address is required',
//       message: !Boolean(message.trim()) && 'Please supply a message',
//     };
//   };

//   setFormStatus = value => {
//     this.setState({
//       ...this.state,
//       formStatus: value,
//     });
//   };

//   sendDataToServer = async () => {
//     try {
//       const { name, email, message } = this.state;
//       const endpoint = config.endpoints.emailContactFormAlert;
//       const options = {
//         method: 'POST',
//         mode: 'cors',
//         credentials: 'omit',
//         body: JSON.stringify({ name, email, message }),
//         headers: new Headers({
//           'Content-type': 'text/plain',
//         }),
//       };
//       const response = await fetch(endpoint, options);

//       if (response.ok) {
//         this.handlePostSuccess();
//       } else {
//         throw new Error('Post failed!');
//       }
//     } catch (error) {
//       this.handlePostError();
//     }
//   };

//   handleSubmit = e => {
//     const invalidMessages = this.createInvalidMessages();
//     const isValid = !Object.keys(invalidMessages).filter(key => Boolean(invalidMessages[key]))
//       .length;

//     if (isValid) {
//       this.setFormStatus('sending');
//       this.sendDataToServer();
//     } else {
//       this.setFormStatus('attempted');
//     }

//     e.preventDefault();
//   };

//   render = () => {
//     const { state } = this;
//     const { formStatus } = state;
//     const isSubmitDisabled = formStatus === 'sending' || formStatus === 'success';
//     const statusMessage = this.createStatusMessage(formStatus);
//     const invalidMessages =
//       (formStatus === 'attempted' || formStatus === 'error') && this.createInvalidMessages();

//     return (
//       <Presentation
//         handleSubmit={this.handleSubmit}
//         handleChange={this.handleChange}
//         values={state}
//         isSubmitDisabled={isSubmitDisabled}
//         statusMessage={statusMessage}
//         invalidMessages={invalidMessages}
//       />
//     );
//   };
// }

export default ContactPage;
