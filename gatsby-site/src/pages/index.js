import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import {createColor, colors, spacing} from '../styles';
import {Content, Spacer, Sizer, ButtonGroup, Flexer} from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import { IconStandardEmail, IconStandardTwitter, IconStandardFacebook, IconStandardPhone, IconFeatureFeedback, IconFeatureSocial, IconFeatureDevelopment, IconFeatureEmail, IconFeatureOptimisation, IconFeatureAnalytics } from '../components/icons';
import LogoWithText, {LogoNoText} from '../components/logo';
import {HeadingOne, HeadingTwo, HeadingThree, Text} from '../components/headings';
import {ButtonPrimary, ButtonSecondary, ButtonTertiary} from '../components/buttons';

const IndexPage = () => (
  <div>

    <Hero color={createColor('yellow')} arrow={['left', 'bottom']} element="header" padding={['largest', 0]}>

      <Sizer maxWidth={{ min: '300px', max: '384px' }}>
        <LogoWithText color="yellow" background={createColor('yellow')}/>
      </Sizer>

      <Spacer padding={['large', 0, 0]}>
        <ButtonGroup>
          <ButtonSecondary href="#" color={createColor('misc', 'white')} isLarge>Services</ButtonSecondary>
          <ButtonPrimary href="#" color={createColor('yellow')} isInverted isLarge>Talk to us</ButtonPrimary>
        </ButtonGroup>
      </Spacer>

    </Hero>

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
                              <ButtonTertiary color={createColor('blue')}>Read more</ButtonTertiary>
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
                              <ButtonTertiary color={createColor('green')}>Read more</ButtonTertiary>
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
                              <ButtonTertiary color={createColor('purple')}>Read more</ButtonTertiary>
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
                              <ButtonTertiary color={createColor('pink')}>Read more</ButtonTertiary>
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
                              <ButtonTertiary color={createColor('orange')}>Read more</ButtonTertiary>
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
                              <ButtonTertiary color={createColor('yellow')}>Read more</ButtonTertiary>
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

    <Hero color={createColor('blue')} arrow={['left', 'top']} element="footer" padding={['largest', 0]}>

      <Text color={createColor('misc', 'white')}>

        <HeadingTwo color={createColor('misc', 'white')}>We love working with <strong>local businesses</strong></HeadingTwo>

        <Text isBlock>Contact us to talk about your growing your digital presence today.</Text>

        <Spacer margin={['large', '-medium', 0]}>
          <Grid>
            {({GridWrapper, GridItemTwoUp: Item}) => (
              <GridWrapper>

                <Item>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <IconStandardPhone />
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonTertiary color={createColor('misc', 'white')} href="tel:+64273058018">027 305 8018</ButtonTertiary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>
                <Item>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <IconStandardEmail />
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonTertiary color={createColor('misc', 'white')} href="mailto:kelsey@enhancedigital.co.nz">kelsey@enhancedigital.co.nz</ButtonTertiary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>
                <Item>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <IconStandardFacebook />
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonTertiary color={createColor('misc', 'white')} href="https://www.facebook.com/notifyenhancedigital/">@notifyenhancedigital</ButtonTertiary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>
                <Item>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <IconStandardTwitter />
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonTertiary color={createColor('misc', 'white')} href="#">xxxxxxxxxxxxxxxxx</ButtonTertiary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>

              </GridWrapper>
            )}
            </Grid>
          </Spacer>

      </Text>

    </Hero>

  </div>
)

export default IndexPage
