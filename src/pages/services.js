import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import {createColor, colors, spacing} from '../styles';
import services from '../data/services';
import {Page, Content, Spacer, Sizer, ButtonGroup, Flexer} from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import { IconStandardEmail, IconStandardTwitter, IconStandardFacebook, IconStandardPhone, IconFeatureFeedback, IconFeatureSocial, IconFeatureDevelopment, IconFeatureEmail, IconFeatureOptimisation, IconFeatureAnalytics } from '../components/icons';
import LogoWithText, {LogoNoText} from '../components/logo';
import {HeadingOne, HeadingTwo, HeadingThree, Text} from '../components/headings';
import {ButtonPrimary, ButtonSecondary, ButtonTertiary, ButtonQuaternary} from '../components/buttons';
import HeaderStandard from '../components/headers/standard';
import FooterStandard from '../components/footers/standard';
import ServicesArticle from '../components/services/article';

const ServicesPage = () => (
  <Page>

    <HeaderStandard title="Services" background={createColor('yellow')}/>

    <main>
      <Spacer padding={[0, 0, 'largest']}>

      {Object.keys(services).map((key) => {

        const {title, id, color, Icon, content} = services[key];

        return (
          <Spacer key={key} padding={['largest', 0, 0]}>
            <Content>

              <ServicesArticle
                title={title}
                id={id}
                color={color}
                Icon={Icon}
                content={content}
              />

            </Content>
          </Spacer>
        );

      })}

      </Spacer>
    </main>

    <FooterStandard />

  </Page>
)

export default ServicesPage
