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
import {HeadingOne, HeadingTwo, HeadingThree} from '../components/headings';
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

          <HeadingOne>Grow your business with a digital strategy and stay ahead of the game.</HeadingOne>
          <span>We offer a number of comprehensive or add-on services for businesses. Maybe you're just starting out on your digital journey, or perhaps you've got some online advertising and customer analytics up and running - but don't really know what to do next. Get in touch and we'll sort it out.</span>

        </Content>
      </Spacer>
    </section>

    <section>
      <Spacer padding={['largest', 0, 0]}>
        <Content>

          <HeadingTwo>Services</HeadingTwo>

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
                              <Sizer width="100px">
                                <Spacer margin={[0, 0, 0, '-medium']}>
                                  <IconFeatureEmail />
                                </Spacer>
                              </Sizer>
                              <HeadingThree>Email marketing</HeadingThree>
                              <span>Get smart with your email marketing strategy – no one wants more junk mail.</span>
                            </Spacer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 'medium', 'largest']}>
                              <ButtonTertiary>Read more</ButtonTertiary>
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
                              <Sizer width="100px">
                                <Spacer margin={[0, 0, 0, '-medium']}>
                                  <IconFeatureOptimisation />
                                </Spacer>
                              </Sizer>
                              <HeadingThree>Search Engine Optimisation and Marketing (SEO & SEM)</HeadingThree>
                              <span>Sort out your SEO and SEM before you and your customers end up in circles.</span>
                            </Spacer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 'medium', 'largest']}>
                              <ButtonTertiary>Read more</ButtonTertiary>
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
                              <Sizer width="100px">
                                <Spacer margin={[0, 0, 0, '-medium']}>
                                  <IconFeatureAnalytics />
                                </Spacer>
                              </Sizer>
                              <HeadingThree>Analytics & Measuring Engagement</HeadingThree>
                              <span>Remove the guesswork. Start tracking your customers, prospects and competitors now to optimise your digital marketing spend.</span>
                            </Spacer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 'medium', 'largest']}>
                              <ButtonTertiary>Read more</ButtonTertiary>
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
                              <Sizer width="100px">
                                <Spacer margin={[0, 0, 0, '-medium']}>
                                  <IconFeatureDevelopment />
                                </Spacer>
                              </Sizer>
                              <HeadingThree>Website design and development</HeadingThree>
                              <span>Let us build and manage your digital footprint so you can stand out from the crowd.</span>
                            </Spacer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 'medium', 'largest']}>
                              <ButtonTertiary>Read more</ButtonTertiary>
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
                              <Sizer width="100px">
                                <Spacer margin={[0, 0, 0, '-medium']}>
                                  <IconFeatureSocial />
                                </Spacer>
                              </Sizer>
                              <HeadingThree>Social Media Management</HeadingThree>
                              <span>People are always talking, so put your ear to the ground and start influencing.</span>
                            </Spacer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 'medium', 'largest']}>
                              <ButtonTertiary>Read more</ButtonTertiary>
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
                              <Sizer width="100px">
                                <Spacer margin={[0, 0, 0, '-medium']}>
                                  <IconFeatureFeedback />
                                </Spacer>
                              </Sizer>
                              <HeadingThree>Customer Feedback</HeadingThree>
                              <span>Start capturing the Voice of your Customer so you can focus on increasing your brand love.</span>
                            </Spacer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 'medium', 'largest']}>
                              <ButtonTertiary>Read more</ButtonTertiary>
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

      <HeadingTwo color={createColor('misc', 'white')}>We love working with <strong>local businesses</strong></HeadingTwo>

      <span>Contact us to talk about your growing your digital presence today.</span>

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
                            <div>Dasd asd ad adasd adas das</div>
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
                            <div>Dasd asd ad adasd adas das</div>
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
                            <div>Dasd asd ad adasd adas das</div>
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
                            <div>Dasd asd ad adasd adas das</div>
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

    </Hero>

  </div>
)

export default IndexPage
