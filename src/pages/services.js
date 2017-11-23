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
import {
  IconStandardEmail,
  IconStandardTwitter,
  IconStandardFacebook,
  IconStandardPhone,
  IconFeatureFeedback,
  IconFeatureSocial,
  IconFeatureDevelopment,
  IconFeatureEmail,
  IconFeatureOptimisation,
  IconFeatureAnalytics,
} from '../components/icons';
import LogoWithText, { LogoNoText } from '../components/logo';
import { HeadingOne, HeadingTwo, HeadingThree, Text } from '../components/headings';
import HeaderStandard from '../components/headers/standard';
import FooterStandard from '../components/footers/standard';
import ServicesArticle from '../components/services/article';
import Divider from '../components/dividers';

const ServicesPage = () => (
  <Page>
    <HeaderStandard title="Services" background={['blue']} />

    <main>
      <Spacer padding={['large', 0, 'largest']}>
        {Object.keys(services).map((key, index) => {
          const { title, id, swatch, Icon, content } = services[key];

          return (
            <Spacer key={key} padding={['large', 0, 0]}>
              <Content>
                {Boolean(index) && (
                  <Spacer padding={[0, 0, 'large']}>
                    <Divider background={['gray', 'extraLight']} />
                  </Spacer>
                )}
                <ServicesArticle
                  title={title}
                  id={id}
                  swatch={swatch}
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
);

export default ServicesPage;
