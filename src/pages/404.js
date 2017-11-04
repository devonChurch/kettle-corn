import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import { createColor, colors, spacing } from '../styles';
import { Page, Content, Spacer, Color, Sizer, ButtonGroup, Flexer } from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import LogoWithText, { LogoNoText } from '../components/logo';
import { HeadingOne, HeadingTwo, HeadingThree, Text } from '../components/headings';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonQuaternary,
} from '../components/buttons';
import HeaderStandard from '../components/headers/standard';

const NotFoundPage = () => (
  <Page background={['red']}>
    <HeaderStandard title="Whoops!" />

    <main>
      <Content>
        <HeadingThree color={['red', 'darkest']}>We were unable to find your page.</HeadingThree>
        <Text color={['red', 'darkest']}>
          Please try going back to our home page using the button below
        </Text>

        <Spacer padding={['large', 0, 0]}>
          <ButtonSecondary href="/" swatch={['misc', 'white']}>
            Go Home
          </ButtonSecondary>
        </Spacer>
      </Content>
    </main>
  </Page>
);

export default NotFoundPage;
