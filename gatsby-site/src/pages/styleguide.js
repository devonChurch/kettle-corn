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

const createDummyHeading = () => firstLetterCaps(loremIpsum({
  count: randomNumber(5, 10),
  units: 'words'
}));
const createDummyParagraphs = () => loremIpsum({
  count: randomNumber(2, 4),
  units: 'paragraphs',
  // words: ['BANANA']
}); // .split('\n\n').map((paragraph) => <p>{paragraph}</p>);

const markdown = (`### Paragraphs:

${createDummyParagraphs()}

### Unordered Lists:

+ Apple
+ Banana
+ Orange

### Ordered Lists

1. Potato
2. Carrot
3. Beetroot

### Hyperlink

This text leads the user to a [hyperlink](https://www.google.com/) in which to click.

### Bold and Italic

Here is some **Bold Text** along side an *Italics Styled* varient.

`)

const StyleguidePage = () => (
  <div>

      <Hero color={createColor('yellow')} arrow={['left', 'bottom']} element="header" padding={['largest', 0, 'large']}>

        <HeadingOne color={createColor('misc', 'white')}>Style Guide</HeadingOne>

      </Hero>

        <section>
          <Spacer padding={['largest', 0]}>
            <Content>

              <HeadingTwo>Colors</HeadingTwo>
              {Object.keys(colors).map((key) => <ColorList key={key} heading={key} options={colors[key]}/>)}

            </Content>
          </Spacer>
        </section>

        <section>
          <Spacer padding={[0, 0, 'largest']}>
            <Content>

              <HeadingTwo>Logo</HeadingTwo>

              <HeadingThree>Light Background</HeadingThree>

              <Grid>
                {({GridWrapper, GridItemThreeUp: Item}) => (
                  <GridWrapper>
                    <Item>
                      <Spacer padding={[0, 'large', 'large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="gray" background={createColor('misc', 'white')}/>
                        </Sizer>
                      </Spacer>
                    </Item>
                    <Item>
                      <Spacer padding={[0, 'large', 'large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="blue" background={createColor('misc', 'white')}/>
                        </Sizer>
                      </Spacer>
                    </Item>
                    <Item>
                      <Spacer padding={[0, 'large', 'large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="pink" background={createColor('misc', 'white')}/>
                        </Sizer>
                      </Spacer>
                    </Item>
                  </GridWrapper>
                )}
              </Grid>

              <HeadingThree>Medium Background</HeadingThree>

              <Grid>
                {({GridWrapper, GridItemThreeUp: Item}) => (
                  <GridWrapper>
                    <Item>
                      <Spacer color={createColor('gray')} padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="gray" background={createColor('gray')}/>
                        </Sizer>
                      </Spacer>
                    </Item>
                    <Item>
                      <Spacer color={createColor('blue')} padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="blue" background={createColor('blue')}/>
                        </Sizer>
                      </Spacer>
                    </Item>
                    <Item>
                      <Spacer color={createColor('pink')} padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="pink" background={createColor('pink')}/>
                        </Sizer>
                      </Spacer>
                    </Item>
                  </GridWrapper>
                )}
                </Grid>

              <Spacer padding={['large', 0, 0]}>
                <HeadingThree>Dark Background</HeadingThree>

                <Grid>
                  {({GridWrapper, GridItemThreeUp: Item}) => (
                    <GridWrapper>
                      <Item>
                        <Spacer color={createColor('gray', 'darkest')} padding={['large']}>
                          <Sizer isCenter maxWidth="300px">
                            <LogoWithText color="gray" background={createColor('gray', 'darkest')}/>
                          </Sizer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('blue', 'darkest')} padding={['large']}>
                          <Sizer isCenter maxWidth="300px">
                            <LogoWithText color="blue" background={createColor('blue', 'darkest')}/>
                          </Sizer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('pink', 'darkest')} padding={['large']}>
                          <Sizer isCenter maxWidth="300px">
                            <LogoWithText color="pink" background={createColor('pink', 'darkest')}/>
                          </Sizer>
                        </Spacer>
                      </Item>
                    </GridWrapper>
                  )}
                </Grid>
              </Spacer>

              <Spacer padding={['large', 0, 0]}>

                <HeadingThree>No Text Alternative</HeadingThree>

                <Grid>
                  {({GridWrapper, GridItemSixUp: Item}) => (
                    <GridWrapper>
                      <Item>
                        <Spacer padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="purple" background={createColor('misc', 'white')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('purple')} padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="purple" background={createColor('purple', 'medium')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('purple', 'darkest')} padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="purple" background={createColor('purple', 'darkest')}/>
                            </Sizer>

                        </Spacer>
                      </Item>

                      <Item>
                        <Spacer padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="green" background={createColor('misc', 'white')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('green')} padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="green" background={createColor('green', 'medium')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('green', 'darkest')} padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="green" background={createColor('green', 'darkest')}/>
                            </Sizer>

                        </Spacer>
                      </Item>

                      <Item>
                        <Spacer padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="yellow" background={createColor('misc', 'white')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('yellow')} padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="yellow" background={createColor('yellow', 'medium')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('yellow', 'darkest')} padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="yellow" background={createColor('yellow', 'darkest')}/>
                            </Sizer>

                        </Spacer>
                      </Item>

                      <Item>
                        <Spacer padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="orange" background={createColor('misc', 'white')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('orange')} padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="orange" background={createColor('orange', 'medium')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('orange', 'darkest')} padding={['medium']}>

                            <Sizer isCenter maxWidth={{min: '50px', max: '100px'}}>
                              <LogoNoText color="orange" background={createColor('orange', 'darkest')}/>
                            </Sizer>

                        </Spacer>
                      </Item>
                    </GridWrapper>
                  )}
                </Grid>

            </Spacer>

            </Content>
          </Spacer>
        </section>

        <section>
          <Content>

            <HeadingTwo>Headings</HeadingTwo>

          </Content>

          <Spacer color={createColor('blue')} padding={['largest', 0, 'large']}>
            <Content>

              <HeadingOne color={createColor('gray', 'darkest')}>{createDummyHeading()}</HeadingOne>
              <HeadingTwo color={createColor('orange')}>{createDummyHeading()}</HeadingTwo>
              <HeadingThree color={createColor('misc', 'white')}>{createDummyHeading()}</HeadingThree>

            </Content>
          </Spacer>

          <Spacer padding={['largest', 0, 'large']}>
            <Content>

              <HeadingOne color={createColor('green')}>{createDummyHeading()}</HeadingOne>
              <HeadingTwo color={createColor('orange', 'darkest')}>{createDummyHeading()}</HeadingTwo>
              <HeadingThree color={createColor('blue', 'darkest')}>{createDummyHeading()}</HeadingThree>

            </Content>
          </Spacer>

          <Spacer color={createColor('gray', 'darkest')} padding={['largest', 0, 'large']}>
            <Content>

              <HeadingOne color={createColor('blue')}>{createDummyHeading()}</HeadingOne>
              <HeadingTwo color={createColor('pink')}>{createDummyHeading()}</HeadingTwo>
              <HeadingThree color={createColor('yellow')}>{createDummyHeading()}</HeadingThree>

            </Content>
          </Spacer>

        </section>


        <section>
          <Spacer padding={['largest', 0, 'large']}>
            <Content>

              <HeadingTwo>Buttons</HeadingTwo>

              <Spacer padding={[0, 0, 'large']}>
                <ButtonGroup>
                  <ButtonPrimary href="#" color={createColor('green')} isLarge>Primary</ButtonPrimary>
                  <ButtonSecondary href="#" color={createColor('green')} isLarge>Secondary</ButtonSecondary>
                </ButtonGroup>
              </Spacer>

              <Spacer padding={[0, 0, 'large']}>
                <ButtonGroup>
                  <ButtonPrimary href="#" color={createColor('pink')}>Primary</ButtonPrimary>
                  <ButtonSecondary href="#" color={createColor('pink')}>Secondary</ButtonSecondary>
                </ButtonGroup>
              </Spacer>

              <Spacer>
                <ButtonTertiary href="#" color={createColor('purple')}>Tertiary</ButtonTertiary>
              </Spacer>

            </Content>
          </Spacer>

          <Spacer padding={['large', 0]} color={createColor('yellow')}>
            <Content>

              <Spacer padding={[0, 0, 'large']}>
                <ButtonGroup>
                  <ButtonPrimary href="#" color={createColor('gray', 'darkest')} isInverted isLarge>Primary</ButtonPrimary>
                  <ButtonSecondary href="#" color={createColor('misc', 'white')} isLarge>Secondary</ButtonSecondary>
                </ButtonGroup>
              </Spacer>

              <Spacer padding={[0, 0, 'large']}>
                <ButtonGroup>
                  <ButtonPrimary href="#" color={createColor('yellow')} isInverted>Primary</ButtonPrimary>
                  <ButtonSecondary href="#" color={createColor('gray', 'darkest')}>Secondary</ButtonSecondary>
                </ButtonGroup>
              </Spacer>

              <Spacer>
                <ButtonTertiary href="#" color={createColor('gray', 'darkest')} isInverted>Tertiary</ButtonTertiary>
              </Spacer>

            </Content>
          </Spacer>
        </section>

        <section>
          <Spacer padding={['largest', 0]}>
            <Content>

              <HeadingTwo color={createColor('orange')}>Markdown</HeadingTwo>

              <Markdown>
        {markdown}
              </Markdown>

            </Content>
          </Spacer>
        </section>

        <section>
          <Spacer padding={[0, 0, 'largest']}>
            <Content>

              <HeadingTwo>Grid</HeadingTwo>

              <HeadingThree>Two Up</HeadingThree>

              <Grid>
                {({GridWrapper, GridItemTwoUp: Item}) => (
                  <GridWrapper>
                    <Item>
                      <Spacer color={createColor('orange')} padding={['largest', 0]} />
                    </Item>
                    <Item>
                      <Spacer color={createColor('purple')} padding={['largest', 0]} />
                    </Item>
                  </GridWrapper>
                )}
              </Grid>

              <Spacer padding={['large', 0, 0]}>

                <HeadingThree>Three Up</HeadingThree>

                <Grid>
                  {({GridWrapper, GridItemThreeUp: Item}) => (
                    <GridWrapper>
                      <Item>
                        <Spacer color={createColor('orange')} padding={['largest', 0]} />
                      </Item>
                      <Item>
                        <Spacer color={createColor('purple')} padding={['largest', 0]} />
                      </Item>
                      <Item>
                        <Spacer color={createColor('green')} padding={['largest', 0]} />
                      </Item>
                    </GridWrapper>
                  )}
                </Grid>
              </Spacer>

              <Spacer padding={['large', 0, 0]}>

                <HeadingThree>Six Up</HeadingThree>

                <Grid>
                  {({GridWrapper, GridItemSixUp: Item}) => (
                    <GridWrapper>
                      <Item>
                        <Spacer color={createColor('pink')} padding={['largest', 0]} />
                      </Item>
                      <Item>
                        <Spacer color={createColor('purple')} padding={['largest', 0]} />
                      </Item>
                      <Item>
                        <Spacer color={createColor('yellow')} padding={['largest', 0]} />
                      </Item>
                      <Item>
                        <Spacer color={createColor('green')} padding={['largest', 0]} />
                      </Item>
                      <Item>
                        <Spacer color={createColor('blue')} padding={['largest', 0]} />
                      </Item>
                      <Item>
                        <Spacer color={createColor('orange')} padding={['largest', 0]} />
                      </Item>
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

            <HeadingTwo>Spacing</HeadingTwo>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Largest</HeadingThree>
              <Spacer isInline color={createColor('blue')} padding={['largest']}>
                <Spacer color={createColor('pink')} padding={['largest', 0, 0, 'largest']}/>
              </Spacer>
            </Spacer>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Large</HeadingThree>
              <Spacer isInline color={createColor('blue')} padding={['large']}>
                <Spacer color={createColor('pink')} padding={['large', 0, 0, 'large']}/>
              </Spacer>
            </Spacer>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Medium</HeadingThree>
              <Spacer isInline color={createColor('blue')} padding={['medium']}>
                <Spacer color={createColor('pink')} padding={['medium', 0, 0, 'medium']}/>
              </Spacer>
            </Spacer>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Small</HeadingThree>
              <Spacer isInline color={createColor('blue')} padding={['small']}>
                <Spacer color={createColor('pink')} padding={['small', 0, 0, 'small']}/>
              </Spacer>
            </Spacer>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Smallest</HeadingThree>
              <Spacer isInline color={createColor('blue')} padding={['smallest']}>
                <Spacer color={createColor('pink')} padding={['smallest', 0, 0, 'smallest']}/>
              </Spacer>
            </Spacer>

          </Content>
        </Spacer>
        </section>

        <section>
          <Spacer>

              <Content>
                <HeadingTwo>Icons</HeadingTwo>
              </Content>

              <Content>
                <HeadingThree>Standard</HeadingThree>

                <Grid>
                  {({GridWrapper, GridItemSixUp: Item}) => (
                    <GridWrapper>
                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer margin={[0, 'auto']}>
                            <Sizer maxWidth={{min: '30px', max: '50px'}}>
                              <IconStandardEmail color={createColor('purple')} />
                            </Sizer>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer margin={[0, 'auto']}>
                            <Sizer maxWidth={{min: '30px', max: '50px'}}>
                              <IconStandardTwitter color={createColor('green')} />
                            </Sizer>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer margin={[0, 'auto']}>
                            <Sizer maxWidth={{min: '30px', max: '50px'}}>
                              <IconStandardFacebook color={createColor('pink')} />
                            </Sizer>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer margin={[0, 'auto']}>
                            <Sizer maxWidth={{min: '30px', max: '50px'}}>
                              <IconStandardPhone color={createColor('orange')} />
                            </Sizer>
                          </Spacer>
                        </Spacer>
                      </Item>
                    </GridWrapper>
                  )}
                </Grid>

              </Content>

              <Spacer color={createColor('gray', 'darkest')} padding={['large', 0]}>
                <Content>

                  <Grid>
                    {({GridWrapper, GridItemSixUp: Item}) => (
                      <GridWrapper>
                        <Item>
                          <Spacer padding={['medium']}>
                            <Spacer margin={[0, 'auto']}>
                              <Sizer maxWidth={{min: '30px', max: '50px'}}>
                                <IconStandardEmail />
                              </Sizer>
                            </Spacer>
                          </Spacer>
                        </Item>
                        <Item>
                          <Spacer padding={['medium']}>
                            <Spacer margin={[0, 'auto']}>
                              <Sizer maxWidth={{min: '30px', max: '50px'}}>
                                <IconStandardTwitter />
                              </Sizer>
                            </Spacer>
                          </Spacer>
                        </Item>
                        <Item>
                          <Spacer padding={['medium']}>
                            <Spacer margin={[0, 'auto']}>
                              <Sizer maxWidth={{min: '30px', max: '50px'}}>
                                <IconStandardFacebook />
                              </Sizer>
                            </Spacer>
                          </Spacer>
                        </Item>
                        <Item>
                          <Spacer padding={['medium']}>
                            <Spacer margin={[0, 'auto']}>
                              <Sizer maxWidth={{min: '30px', max: '50px'}}>
                                <IconStandardPhone />
                              </Sizer>
                            </Spacer>
                          </Spacer>
                        </Item>
                      </GridWrapper>
                    )}
                  </Grid>

                </Content>
              </Spacer>

          </Spacer>
        </section>

  </div>
)

export default StyleguidePage
