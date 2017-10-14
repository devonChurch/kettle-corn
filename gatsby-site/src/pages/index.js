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
import HeaderHome from '../components/headers/home';
import FooterStandard from '../components/footers/standard';

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
                    <Item>
                      <Flexer>
                        {({Wrapper, Item}) => (
                          <Wrapper direction="column">
                            <Item grow="1">
                              <Spacer padding={[0, 'medium', 'small']}>
                                <Spacer margin={[0, 0, 0, '-20px']}>
                                  <Sizer width="100px">
                                    <IconFeatureEmail />
                                  </Sizer>
                                </Spacer>
                                <HeadingThree color={createColor('blue')}>Email marketing</HeadingThree>
                                <Text color={createColor('blue', 'darkest')}>Get smart with your email marketing strategy – no one wants more junk mail.</Text>
                              </Spacer>
                            </Item>
                            <Item>
                              <Spacer padding={[0, 'medium', 'largest']}>
                                <ButtonTertiary href="/services#email-marketing" color={createColor('blue')}>Read more</ButtonTertiary>
                              </Spacer>
                            </Item>
                          </Wrapper>
                        )}
                      </Flexer>
                    </Item>
                    <Item>
                      <Flexer>
                        {({Wrapper, Item}) => (
                          <Wrapper direction="column">
                            <Item grow="1">
                              <Spacer padding={[0, 'medium', 'small']}>
                                <Spacer margin={[0, 0, 0, '-20px']}>
                                  <Sizer width="100px">
                                    <IconFeatureOptimisation />
                                  </Sizer>
                                </Spacer>
                                <HeadingThree color={createColor('green')}>Search Engine Optimisation and Marketing (SEO & SEM)</HeadingThree>
                                <Text color={createColor('green', 'darkest')}>Sort out your SEO and SEM before you and your customers end up in circles.</Text>
                              </Spacer>
                            </Item>
                            <Item>
                              <Spacer padding={[0, 'medium', 'largest']}>
                                <ButtonTertiary href="/services#seo-&-sem" color={createColor('green')}>Read more</ButtonTertiary>
                              </Spacer>
                            </Item>
                          </Wrapper>
                        )}
                      </Flexer>
                    </Item>
                    <Item>
                      <Flexer>
                        {({Wrapper, Item}) => (
                          <Wrapper direction="column">
                            <Item grow="1">
                              <Spacer padding={[0, 'medium', 'small']}>
                                <Spacer margin={[0, 0, 0, '-20px']}>
                                  <Sizer width="100px">
                                    <IconFeatureAnalytics />
                                  </Sizer>
                                </Spacer>
                                <HeadingThree color={createColor('purple')}>Analytics & Measuring Engagement</HeadingThree>
                                <Text color={createColor('purple', 'darkest')}>Remove the guesswork. Start tracking your customers, prospects and competitors now to optimise your digital marketing spend.</Text>
                              </Spacer>
                            </Item>
                            <Item>
                              <Spacer padding={[0, 'medium', 'largest']}>
                                <ButtonTertiary href="/services#analytics-&-measuring-engagement" color={createColor('purple')}>Read more</ButtonTertiary>
                              </Spacer>
                            </Item>
                          </Wrapper>
                        )}
                      </Flexer>
                    </Item>
                    <Item>
                      <Flexer>
                        {({Wrapper, Item}) => (
                          <Wrapper direction="column">
                            <Item grow="1">
                              <Spacer padding={[0, 'medium', 'small']}>
                                <Spacer margin={[0, 0, 0, '-20px']}>
                                  <Sizer width="100px">
                                    <IconFeatureDevelopment />
                                  </Sizer>
                                </Spacer>
                                <HeadingThree color={createColor('pink')}>Website design and development</HeadingThree>
                                <Text color={createColor('pink', 'darkest')}>Let us build and manage your digital footprint so you can stand out from the crowd.</Text>
                              </Spacer>
                            </Item>
                            <Item>
                              <Spacer padding={[0, 'medium', 'largest']}>
                                <ButtonTertiary href="/services#website-design-&-development" color={createColor('pink')}>Read more</ButtonTertiary>
                              </Spacer>
                            </Item>
                          </Wrapper>
                        )}
                      </Flexer>
                    </Item>
                    <Item>
                      <Flexer>
                        {({Wrapper, Item}) => (
                          <Wrapper direction="column">
                            <Item grow="1">
                              <Spacer padding={[0, 'medium', 'small']}>
                                <Spacer margin={[0, 0, 0, '-20px']}>
                                  <Sizer width="100px">
                                    <IconFeatureSocial />
                                  </Sizer>
                                </Spacer>
                                <HeadingThree color={createColor('orange')}>Social Media Management</HeadingThree>
                                <Text color={createColor('orange', 'darkest')}>People are always talking, so put your ear to the ground and start influencing.</Text>
                              </Spacer>
                            </Item>
                            <Item>
                              <Spacer padding={[0, 'medium', 'largest']}>
                                <ButtonTertiary href="/services#social-media-management" color={createColor('orange')}>Read more</ButtonTertiary>
                              </Spacer>
                            </Item>
                          </Wrapper>
                        )}
                      </Flexer>
                    </Item>
                    <Item>
                      <Flexer>
                        {({Wrapper, Item}) => (
                          <Wrapper direction="column">
                            <Item grow="1">
                              <Spacer padding={[0, 'medium', 'small']}>
                                <Spacer margin={[0, 0, 0, '-20px']}>
                                  <Sizer width="100px">
                                    <IconFeatureFeedback />
                                  </Sizer>
                                </Spacer>
                                <HeadingThree color={createColor('yellow')}>Customer Feedback</HeadingThree>
                                <Text color={createColor('yellow', 'darkest')}>Start capturing the Voice of your Customer so you can focus on increasing your brand love.</Text>
                              </Spacer>
                            </Item>
                            <Item>
                              <Spacer padding={[0, 'medium', 'largest']}>
                                <ButtonTertiary href="/services#customer-feedback" color={createColor('yellow')}>Read more</ButtonTertiary>
                              </Spacer>
                            </Item>
                          </Wrapper>
                        )}
                      </Flexer>
                    </Item>
                  </GridWrapper>
                )}
                </Grid>
              </Spacer>

          </Content>
        </Spacer>
      </section>

    </main>

    <FooterStandard />

  </Page>
)

export default IndexPage
