import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { createColor, colors, spacing } from '../styles';
import { config } from '../utils';
import services from '../data/services';
import navigation from '../data/navigation/';
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
import FooterSimple from '../components/footers/simple';

const ContactPage = () => (
  <Page>
    <Helmet>
      <meta property="og:url" content={`${config.siteEndpoint}${navigation.contact.path}/`} />
      <meta property="og:title" content="We love working with local businesses" />
      <meta
        property="og:description"
        content="Contact us to talk about your growing your digital presence today"
      />
    </Helmet>
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

    <FooterSimple />
  </Page>
);

export default ContactPage;
