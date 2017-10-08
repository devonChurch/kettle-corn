import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import {createColor, colors, spacing} from '../styles';
import {Content, Spacer, Sizer, ButtonGroup} from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import { IconStandardEmail, IconStandardTwitter, IconStandardFacebook, IconStandardPhone } from '../components/icons';
import LogoWithText, {LogoNoText} from '../components/logo';
import {HeadingOne, HeadingTwo, HeadingThree} from '../components/headings';
import {ButtonPrimary, ButtonSecondary, ButtonTertiary} from '../components/buttons';

const IndexPage = () => (
  <div>

      <Hero color={createColor('yellow')} arrow={['left', 'bottom']} element="header" padding={['largest', 0]}>

        <Sizer maxWidth={{ min: '300px', max: '384px' }}>
          <LogoWithText color="yellow" background={createColor('yellow')}/>
        </Sizer>


      </Hero>

      <section>
        <Spacer padding={['largest', 0]}>
          <Content>

            <HeadingTwo>Colors</HeadingTwo>


          </Content>
        </Spacer>
      </section>



  </div>
)

export default IndexPage
