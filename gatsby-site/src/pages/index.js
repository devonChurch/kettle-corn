import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import {createColor, colors, spacing} from '../styles';
import {Content, Spacer, ButtonGroup} from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import { IconStandardEmail, IconStandardTwitter, IconStandardFacebook, IconStandardPhone } from '../components/icons';
import LogoWithTag, {LogoOnly} from '../components/logo';
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

const IndexPage = () => (
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
                        <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                          <LogoWithTag color="gray" background={createColor('misc', 'white')}/>
                        </Spacer>
                      </Spacer>
                    </Item>
                    <Item>
                      <Spacer padding={[0, 'large', 'large']}>
                        <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                          <LogoWithTag color="blue" background={createColor('misc', 'white')}/>
                        </Spacer>
                      </Spacer>
                    </Item>
                    <Item>
                      <Spacer padding={[0, 'large', 'large']}>
                        <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                          <LogoWithTag color="pink" background={createColor('misc', 'white')}/>
                        </Spacer>
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
                        <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                          <LogoWithTag color="gray" background={createColor('gray')}/>
                        </Spacer>
                      </Spacer>
                    </Item>
                    <Item>
                      <Spacer color={createColor('blue')} padding={['large']}>
                        <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                          <LogoWithTag color="blue" background={createColor('blue')}/>
                        </Spacer>
                      </Spacer>
                    </Item>
                    <Item>
                      <Spacer color={createColor('pink')} padding={['large']}>
                        <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                          <LogoWithTag color="pink" background={createColor('pink')}/>
                        </Spacer>
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
                          <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                            <LogoWithTag color="gray" background={createColor('gray', 'darkest')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('blue', 'darkest')} padding={['large']}>
                          <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                            <LogoWithTag color="blue" background={createColor('blue', 'darkest')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('pink', 'darkest')} padding={['large']}>
                          <Spacer width={{max: '200px'}} margin={[0, 'auto']}>
                            <LogoWithTag color="pink" background={createColor('pink', 'darkest')}/>
                          </Spacer>
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
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="purple" background={createColor('misc', 'white')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('purple')} padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="purple" background={createColor('purple', 'medium')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('purple', 'darkest')} padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="purple" background={createColor('purple', 'darkest')}/>
                          </Spacer>
                        </Spacer>
                      </Item>

                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="green" background={createColor('misc', 'white')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('green')} padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="green" background={createColor('green', 'medium')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('green', 'darkest')} padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="green" background={createColor('green', 'darkest')}/>
                          </Spacer>
                        </Spacer>
                      </Item>

                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="yellow" background={createColor('misc', 'white')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('yellow')} padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="yellow" background={createColor('yellow', 'medium')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('yellow', 'darkest')} padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="yellow" background={createColor('yellow', 'darkest')}/>
                          </Spacer>
                        </Spacer>
                      </Item>

                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="orange" background={createColor('misc', 'white')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('orange')} padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="orange" background={createColor('orange', 'medium')}/>
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer color={createColor('orange', 'darkest')} padding={['medium']}>
                          <Spacer width={{max: '100px'}} margin={[0, 'auto']}>
                            <LogoOnly color="orange" background={createColor('orange', 'darkest')}/>
                          </Spacer>
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
                          <Spacer width={{max: '50px'}} margin={[0, 'auto']}>
                            <IconStandardEmail color={createColor('purple')} />
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer width={{max: '50px'}} margin={[0, 'auto']}>
                            <IconStandardTwitter color={createColor('green')} />
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer width={{max: '50px'}} margin={[0, 'auto']}>
                            <IconStandardFacebook color={createColor('pink')} />
                          </Spacer>
                        </Spacer>
                      </Item>
                      <Item>
                        <Spacer padding={['medium']}>
                          <Spacer width={{max: '50px'}} margin={[0, 'auto']}>
                            <IconStandardPhone color={createColor('orange')} />
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
                            <Spacer width={{max: '50px'}} margin={[0, 'auto']}>
                              <IconStandardEmail />
                            </Spacer>
                          </Spacer>
                        </Item>
                        <Item>
                          <Spacer padding={['medium']}>
                            <Spacer width={{max: '50px'}} margin={[0, 'auto']}>
                              <IconStandardTwitter />
                            </Spacer>
                          </Spacer>
                        </Item>
                        <Item>
                          <Spacer padding={['medium']}>
                            <Spacer width={{max: '50px'}} margin={[0, 'auto']}>
                              <IconStandardFacebook />
                            </Spacer>
                          </Spacer>
                        </Item>
                        <Item>
                          <Spacer padding={['medium']}>
                            <Spacer width={{max: '50px'}} margin={[0, 'auto']}>
                              <IconStandardPhone />
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

export default IndexPage
