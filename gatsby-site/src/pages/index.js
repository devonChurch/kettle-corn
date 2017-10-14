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
import Partners from '../components/partners';
import { IconStandardEmail, IconStandardTwitter, IconStandardFacebook, IconStandardPhone, IconFeatureFeedback, IconFeatureSocial, IconFeatureDevelopment, IconFeatureEmail, IconFeatureOptimisation, IconFeatureAnalytics } from '../components/icons';
import LogoWithText, {LogoNoText} from '../components/logo';
import {HeadingOne, HeadingTwo, HeadingThree, Text} from '../components/headings';
import {ButtonPrimary, ButtonSecondary, ButtonTertiary, ButtonQuaternary} from '../components/buttons';
import HeaderHome from '../components/headers/home';
import FooterStandard from '../components/footers/standard';
import ServicesTile from '../components/services/tile';

const IndexPage = () => (
  <Page>

    <HeaderHome />

    <main>

      <section>
        <Spacer padding={['largest', 0, 0]}>
          <Content>

            <HeadingOne color={createColor('yellow')}>
              <Text color={createColor('gray')} weight={400}>Grow your business with a <Text color={createColor('yellow', 'darkest')} weight={700}>digital strategy</Text> and</Text> stay ahead of the game.
            </HeadingOne>
            <Text isBlock>We offer a number of comprehensive or add-on services for businesses. Maybe you're just starting out on your digital journey, or perhaps you've got some online advertising and customer analytics up and running - but don't really know what to do next. Get in touch and we'll sort it out.</Text>

          </Content>
        </Spacer>
      </section>

      <section>
        <Spacer padding={['largest', 0, 0]}>
          <Content>

            <HeadingTwo color={createColor('gray', 'light')}>Services</HeadingTwo>

            <Spacer margin={[0, '-medium']}>
              <Grid>
                {({GridWrapper, GridItemThreeUp: Item}) => (
                  <GridWrapper>
                    {Object.keys(services).map((key) => {

                      const {title, id, color, Icon, blurb} = services[key];

                      return (
                        <Item key={key}>
                          <ServicesTile
                            title={title}
                            id={id}
                            color={color}
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
      </section>

      <section>
        <Spacer padding={[0, 0, 'largest']}>
          <Content>

            <HeadingTwo color={createColor('gray', 'light')}>We like working with</HeadingTwo>

            <Partners />

          </Content>
        </Spacer>
      </section>

    </main>

    <FooterStandard />

  </Page>
)

export default IndexPage
