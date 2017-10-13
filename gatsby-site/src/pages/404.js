import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import {createColor, colors, spacing} from '../styles';
import {Page, Content, Spacer, Sizer, ButtonGroup, Flexer} from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import { IconStandardEmail, IconStandardTwitter, IconStandardFacebook, IconStandardPhone, IconFeatureFeedback, IconFeatureSocial, IconFeatureDevelopment, IconFeatureEmail, IconFeatureOptimisation, IconFeatureAnalytics } from '../components/icons';
import LogoWithText, {LogoNoText} from '../components/logo';
import {HeadingOne, HeadingTwo, HeadingThree, Text} from '../components/headings';
import {ButtonPrimary, ButtonSecondary, ButtonTertiary, ButtonQuaternary} from '../components/buttons';

const NotFoundPage = () => (
  <Page background={createColor('red')}>

    <Hero element="header" padding={['medium', 0, 'large']}>

      <Spacer margin={[0, '-small']} padding={[0, 0, 'medium']}>
        <Flexer>
          {({Wrapper, Item}) => (
            <Wrapper wrap="wrap" justify="space-between">
              <Item grow="1">
                <Spacer padding={[0, 'small']}>
                  <ButtonTertiary href="/" color={createColor('misc', 'white')}>back</ButtonTertiary>
                </Spacer>
              </Item>
              <Item>
                <Spacer padding={[0, 'small']}>
                  <ButtonTertiary href="/services" color={createColor('misc', 'white')}>Services</ButtonTertiary>
                </Spacer>
              </Item>
              <Item>
                <Spacer padding={[0, 'small']}>
                  <ButtonTertiary color={createColor('misc', 'white')}>Something else</ButtonTertiary>
                </Spacer>
              </Item>
            </Wrapper>
          )}
        </Flexer>
      </Spacer>

      <Flexer>
        {({Wrapper, Item}) => (
          <Wrapper wrap="wrap" align="center">
            <Item>
              <Spacer padding={[0, 'large', 0, 0]}>
                <Link to="/">
                  <Sizer width={{ min: '80px', max: '100px' }}>
                    <LogoNoText color="yellow" background={createColor('yellow')}/>
                  </Sizer>
                </Link>
              </Spacer>
            </Item>
            <Item grow="1">
              <Spacer padding={['medium', 0]}>
                <HeadingOne color={createColor('misc', 'white')} isSpaceless>Whoops</HeadingOne>
              </Spacer>
            </Item>
          </Wrapper>
        )}
      </Flexer>

    </Hero>

    <Content>

      <HeadingThree color={createColor('red', 'darkest')}>We were unable to find your page.</HeadingThree>
      <Text color={createColor('red', 'darkest')}>Please try going back to our home page using the button below</Text>

      <Spacer padding={['large', 0, 0]}>
        <ButtonSecondary href="/" color={createColor('misc', 'white')}>Go Home</ButtonSecondary>
      </Spacer>

    </Content>



  </Page>
)

export default NotFoundPage
