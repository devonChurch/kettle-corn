import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import { createColor, colors, spacing } from '../styles';
import services from '../data/services';
import { Page, Content, Spacer, Sizer, Color, ButtonGroup, Flexer } from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import Partners from '../components/partners';
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
import { HeadingOne, HeadingTwo, HeadingThree, Text, Introduction } from '../components/headings';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonQuaternary,
} from '../components/buttons';
import HeaderHome from '../components/headers/home';
import FooterStandard from '../components/footers/standard';
import ServicesTile from '../components/services/tile';

const IndexPage = () => (
  <Page>
    <HeaderHome />

    <main>
      <section>
        <Spacer padding={['largest', 0]}>
          <Content>
            <Introduction color={['orange']}>
              <Text color={['gray']} weight={400}>
                Start{' '}
                <Text color={['blue', 'darkest']} weight={700}>
                  reaching and engaging
                </Text>{' '}
                <br />
                with more customers through
              </Text>{' '}
              <br />
              smarter digital marketing.
            </Introduction>
            <Spacer padding={['large', 0, 0]}>
              <Text display="block">
                Talk to us about enhancing your business and find out what motivates your customer.
                We'll help with end-to-end data driven marketing, personalisation and insights to
                propel you forward.
              </Text>
            </Spacer>
          </Content>
        </Spacer>
      </section>

      <section>
        <Color background={['blue', 'darkest']}>
          <Spacer padding={['largest', 0]}>
            <Content>
              <HeadingTwo color={['misc', 'white']}>Services</HeadingTwo>

              <Spacer margin={[0, '-small']}>
                <Grid>
                  {({ GridWrapper, GridItemThreeUp: Item }) => (
                    <GridWrapper>
                      {Object.keys(services).map(key => {
                        const { title, id, swatch, Icon, blurb } = services[key];

                        return (
                          <Item key={key}>
                            <ServicesTile
                              title={title}
                              id={id}
                              swatch={swatch}
                              Icon={Icon}
                              blurb={blurb}
                            />
                          </Item>
                        );
                      })}
                    </GridWrapper>
                  )}
                </Grid>
              </Spacer>
            </Content>
          </Spacer>
        </Color>
      </section>

      <section>
        <Color background={['green']}>
          <Spacer padding={['largest', 0]}>
            <Content>
              <HeadingTwo color={['misc', 'white']}>
                We like{' '}
                <Text color={['green', 'darkest']} weight={700}>
                  working with
                </Text>
              </HeadingTwo>
              <Partners />
            </Content>
          </Spacer>
        </Color>
      </section>
    </main>

    <Spacer padding={['largest', 0, 0]}>
      <FooterStandard />
    </Spacer>
  </Page>
);

export default IndexPage;
