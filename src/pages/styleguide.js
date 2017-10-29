import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import { createColor, colors, spacing } from '../styles';
import { Page, Content, Spacer, Sizer, Color, Flexer, ButtonGroup } from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import {
  IconStandardEmail,
  IconStandardTwitter,
  IconStandardFacebook,
  IconStandardPhone,
} from '../components/icons';
import LogoWithText, { LogoNoText } from '../components/logo';
import { HeadingOne, HeadingTwo, HeadingThree, Text } from '../components/headings';
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from '../components/buttons';
import HeaderStandard from '../components/headers/standard';

const createDummyHeading = () =>
  firstLetterCaps(
    loremIpsum({
      count: randomNumber(5, 10),
      units: 'words',
    }),
  );
const createDummyParagraphs = () =>
  loremIpsum({
    count: randomNumber(2, 4),
    units: 'paragraphs',
    // words: ['BANANA']
  }); // .split('\n\n').map((paragraph) => <p>{paragraph}</p>);

const markdown = `### Paragraphs:

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

`;

const StyleguidePage = () => (
  <Page>
    <HeaderStandard title="Style Guide" background={['gray', 'dark']} />

    <section>
      <Spacer padding={['largest', 0]}>
        <Content>
          <HeadingTwo>Colors</HeadingTwo>
          {Object.keys(colors).map(key => (
            <ColorList key={key} heading={key} options={colors[key]} />
          ))}
        </Content>
      </Spacer>
    </section>

    <section>
      <Spacer padding={[0, 0, 'largest']}>
        <Content>
          <HeadingTwo>Logo</HeadingTwo>

          <Spacer padding={['large', 0, 0]}>
            <HeadingThree>Light Background</HeadingThree>

            <Grid>
              {({ GridWrapper, GridItemThreeUp: Item }) => (
                <GridWrapper>
                  <Item>
                    <Spacer padding={[0, 'large', 'large']}>
                      <Sizer isCenter maxWidth="300px">
                        <LogoWithText color="gray" background={createColor('misc', 'white')} />
                      </Sizer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Spacer padding={[0, 'large', 'large']}>
                      <Sizer isCenter maxWidth="300px">
                        <LogoWithText color="blue" background={createColor('misc', 'white')} />
                      </Sizer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Spacer padding={[0, 'large', 'large']}>
                      <Sizer isCenter maxWidth="300px">
                        <LogoWithText color="pink" background={createColor('misc', 'white')} />
                      </Sizer>
                    </Spacer>
                  </Item>
                </GridWrapper>
              )}
            </Grid>
          </Spacer>

          <Spacer padding={['large', 0, 0]}>
            <HeadingThree>Medium Background</HeadingThree>

            <Grid>
              {({ GridWrapper, GridItemThreeUp: Item }) => (
                <GridWrapper>
                  <Item>
                    <Color background={['gray']}>
                      <Spacer padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="gray" background={createColor('gray')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['blue']}>
                      <Spacer padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="blue" background={createColor('blue')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['pink']}>
                      <Spacer padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="pink" background={createColor('pink')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                </GridWrapper>
              )}
            </Grid>
          </Spacer>

          <Spacer padding={['largest', 0, 0]}>
            <HeadingThree>Dark Background</HeadingThree>

            <Grid>
              {({ GridWrapper, GridItemThreeUp: Item }) => (
                <GridWrapper>
                  <Item>
                    <Color background={['gray', 'darkest']}>
                      <Spacer padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="gray" background={createColor('gray', 'darkest')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['blue', 'darkest']}>
                      <Spacer padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="blue" background={createColor('blue', 'darkest')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['pink', 'darkest']}>
                      <Spacer padding={['large']}>
                        <Sizer isCenter maxWidth="300px">
                          <LogoWithText color="pink" background={createColor('pink', 'darkest')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                </GridWrapper>
              )}
            </Grid>
          </Spacer>

          <Spacer padding={['largest', 0, 0]}>
            <HeadingThree>No Text Alternative</HeadingThree>

            <Grid>
              {({ GridWrapper, GridItemSixUp: Item }) => (
                <GridWrapper>
                  <Item>
                    <Spacer padding={['medium']}>
                      <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                        <LogoNoText color="purple" background={createColor('misc', 'white')} />
                      </Sizer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Color background={['purple']}>
                      <Spacer padding={['medium']}>
                        <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                          <LogoNoText color="purple" background={createColor('purple', 'medium')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['purple', 'darkest']}>
                      <Spacer padding={['medium']}>
                        <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                          <LogoNoText
                            color="purple"
                            background={createColor('purple', 'darkest')}
                          />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>

                  <Item>
                    <Spacer padding={['medium']}>
                      <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                        <LogoNoText color="green" background={createColor('misc', 'white')} />
                      </Sizer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Color background={['green']}>
                      <Spacer padding={['medium']}>
                        <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                          <LogoNoText color="green" background={createColor('green', 'medium')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['green', 'darkest']}>
                      <Spacer padding={['medium']}>
                        <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                          <LogoNoText color="green" background={createColor('green', 'darkest')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>

                  <Item>
                    <Spacer padding={['medium']}>
                      <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                        <LogoNoText color="yellow" background={createColor('misc', 'white')} />
                      </Sizer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Color background={['yellow']}>
                      <Spacer padding={['medium']}>
                        <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                          <LogoNoText color="yellow" background={createColor('yellow', 'medium')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['yellow', 'darkest']}>
                      <Spacer padding={['medium']}>
                        <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                          <LogoNoText
                            color="yellow"
                            background={createColor('yellow', 'darkest')}
                          />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>

                  <Item>
                    <Spacer padding={['medium']}>
                      <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                        <LogoNoText color="orange" background={createColor('misc', 'white')} />
                      </Sizer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Color background={['orange']}>
                      <Spacer padding={['medium']}>
                        <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                          <LogoNoText color="orange" background={createColor('orange', 'medium')} />
                        </Sizer>
                      </Spacer>
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['orange', 'darkest']}>
                      <Spacer padding={['medium']}>
                        <Sizer isCenter maxWidth={{ min: '50px', max: '100px' }}>
                          <LogoNoText
                            color="orange"
                            background={createColor('orange', 'darkest')}
                          />
                        </Sizer>
                      </Spacer>
                    </Color>
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

      <Color background={['blue']}>
        <Spacer padding={['largest', 0, 'large']}>
          <Content>
            <HeadingOne color={createColor('gray', 'darkest')}>{createDummyHeading()}</HeadingOne>
            <HeadingTwo color={createColor('orange')}>{createDummyHeading()}</HeadingTwo>
            <HeadingThree color={createColor('misc', 'white')}>{createDummyHeading()}</HeadingThree>
          </Content>
        </Spacer>
      </Color>

      <Spacer padding={['largest', 0, 'large']}>
        <Content>
          <HeadingOne color={createColor('green')}>{createDummyHeading()}</HeadingOne>
          <HeadingTwo color={createColor('orange', 'darkest')}>{createDummyHeading()}</HeadingTwo>
          <HeadingThree color={createColor('blue', 'darkest')}>{createDummyHeading()}</HeadingThree>
        </Content>
      </Spacer>

      <Color background={['gray', 'darkest']}>
        <Spacer padding={['largest', 0, 'large']}>
          <Content>
            <HeadingOne color={createColor('blue')}>{createDummyHeading()}</HeadingOne>
            <HeadingTwo color={createColor('pink')}>{createDummyHeading()}</HeadingTwo>
            <HeadingThree color={createColor('yellow')}>{createDummyHeading()}</HeadingThree>
          </Content>
        </Spacer>
      </Color>
    </section>

    <section>
      <Spacer padding={['largest', 0, 'large']}>
        <Content>
          <HeadingTwo>Buttons</HeadingTwo>

          <Spacer padding={[0, 0, 'large']}>
            <ButtonGroup>
              <ButtonPrimary href="#" swatch={['green']} isLarge>
                Primary
              </ButtonPrimary>
              <ButtonSecondary href="#" swatch={['green']} isLarge>
                Secondary
              </ButtonSecondary>
            </ButtonGroup>
          </Spacer>

          <Spacer padding={[0, 0, 'large']}>
            <ButtonGroup>
              <ButtonPrimary href="#" swatch={['pink']}>
                Primary
              </ButtonPrimary>
              <ButtonSecondary href="#" swatch={['pink']}>
                Secondary
              </ButtonSecondary>
            </ButtonGroup>
          </Spacer>

          <Spacer>
            <ButtonTertiary href="#" swatch={['purple']}>
              Tertiary
            </ButtonTertiary>
          </Spacer>
        </Content>
      </Spacer>

      <Color background={['yellow']}>
        <Spacer padding={['large', 0]}>
          <Content>
            <Spacer padding={[0, 0, 'large']}>
              <ButtonGroup>
                <ButtonPrimary href="#" swatch={['gray', 'darkest']} isInverted isLarge>
                  Primary
                </ButtonPrimary>
                <ButtonSecondary href="#" swatch={['misc', 'white']} isLarge>
                  Secondary
                </ButtonSecondary>
              </ButtonGroup>
            </Spacer>

            <Spacer padding={[0, 0, 'large']}>
              <ButtonGroup>
                <ButtonPrimary href="#" swatch={['yellow']} isInverted>
                  Primary
                </ButtonPrimary>
                <ButtonSecondary href="#" swatch={['gray', 'darkest']}>
                  Secondary
                </ButtonSecondary>
              </ButtonGroup>
            </Spacer>

            <Spacer>
              <ButtonTertiary href="#" swatch={['gray', 'darkest']} isInverted>
                Tertiary
              </ButtonTertiary>
            </Spacer>
          </Content>
        </Spacer>
      </Color>
    </section>

    <section>
      <Spacer padding={['largest', 0]}>
        <Content>
          <HeadingTwo color={createColor('orange')}>Markdown</HeadingTwo>

          <Markdown>{markdown}</Markdown>
        </Content>
      </Spacer>
    </section>

    <section>
      <Spacer padding={[0, 0, 'largest']}>
        <Content>
          <HeadingTwo>Grid</HeadingTwo>

          <HeadingThree>Two Up</HeadingThree>

          <Grid>
            {({ GridWrapper, GridItemTwoUp: Item }) => (
              <GridWrapper>
                <Item>
                  <Color background={['orange']}>
                    <Spacer padding={['largest', 0]} />
                  </Color>
                </Item>
                <Item>
                  <Color background={['purple']}>
                    <Spacer padding={['largest', 0]} />
                  </Color>
                </Item>
              </GridWrapper>
            )}
          </Grid>

          <Spacer padding={['large', 0, 0]}>
            <HeadingThree>Three Up</HeadingThree>

            <Grid>
              {({ GridWrapper, GridItemThreeUp: Item }) => (
                <GridWrapper>
                  <Item>
                    <Color background={['orange']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['purple']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['green']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
                  </Item>
                </GridWrapper>
              )}
            </Grid>
          </Spacer>

          <Spacer padding={['large', 0, 0]}>
            <HeadingThree>Six Up</HeadingThree>

            <Grid>
              {({ GridWrapper, GridItemSixUp: Item }) => (
                <GridWrapper>
                  <Item>
                    <Color background={['pink']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['purple']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['yellow']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['green']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['blue']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
                  </Item>
                  <Item>
                    <Color background={['orange']}>
                      <Spacer padding={['largest', 0]} />
                    </Color>
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
            <Color background={['blue']} display="inline-flex">
              <Spacer padding={['largest']}>
                <Color background={['pink']}>
                  <Spacer padding={['largest', 0, 0, 'largest']} />
                </Color>
              </Spacer>
            </Color>
          </Spacer>

          <Spacer padding={['large', 0, 0]}>
            <HeadingThree>Large</HeadingThree>
            <Color background={['blue']} display="inline-flex">
              <Spacer padding={['large']}>
                <Color background={['pink']}>
                  <Spacer padding={['large', 0, 0, 'large']} />
                </Color>
              </Spacer>
            </Color>
          </Spacer>

          <Spacer padding={['large', 0, 0]}>
            <HeadingThree>Medium</HeadingThree>
            <Color background={['blue']} display="inline-flex">
              <Spacer padding={['medium']}>
                <Color background={['pink']}>
                  <Spacer padding={['medium', 0, 0, 'medium']} />
                </Color>
              </Spacer>
            </Color>
          </Spacer>

          <Spacer padding={['large', 0, 0]}>
            <HeadingThree>Small</HeadingThree>
            <Color background={['blue']} display="inline-flex">
              <Spacer padding={['small']}>
                <Color background={['pink']}>
                  <Spacer padding={['small', 0, 0, 'small']} />
                </Color>
              </Spacer>
            </Color>
          </Spacer>

          <Spacer padding={['large', 0, 0]}>
            <HeadingThree>Smallest</HeadingThree>
            <Color background={['blue']} display="inline-flex">
              <Spacer padding={['smallest']}>
                <Color background={['pink']}>
                  <Spacer padding={['smallest', 0, 0, 'smallest']} />
                </Color>
              </Spacer>
            </Color>
          </Spacer>
        </Content>
      </Spacer>
    </section>

    <section>
      <Content>
        <HeadingTwo>Icons</HeadingTwo>
      </Content>

      <Content>
        <HeadingThree>Standard</HeadingThree>

        <Grid>
          {({ GridWrapper, GridItemSixUp: Item }) => (
            <GridWrapper>
              <Item>
                <Spacer padding={['medium']}>
                  <Spacer margin={[0, 'auto']}>
                    <Sizer maxWidth={{ min: '30px', max: '50px' }}>
                      <IconStandardEmail color={createColor('purple')} />
                    </Sizer>
                  </Spacer>
                </Spacer>
              </Item>
              <Item>
                <Spacer padding={['medium']}>
                  <Spacer margin={[0, 'auto']}>
                    <Sizer maxWidth={{ min: '30px', max: '50px' }}>
                      <IconStandardTwitter color={createColor('green')} />
                    </Sizer>
                  </Spacer>
                </Spacer>
              </Item>
              <Item>
                <Spacer padding={['medium']}>
                  <Spacer margin={[0, 'auto']}>
                    <Sizer maxWidth={{ min: '30px', max: '50px' }}>
                      <IconStandardFacebook color={createColor('pink')} />
                    </Sizer>
                  </Spacer>
                </Spacer>
              </Item>
              <Item>
                <Spacer padding={['medium']}>
                  <Spacer margin={[0, 'auto']}>
                    <Sizer maxWidth={{ min: '30px', max: '50px' }}>
                      <IconStandardPhone color={createColor('orange')} />
                    </Sizer>
                  </Spacer>
                </Spacer>
              </Item>
            </GridWrapper>
          )}
        </Grid>
      </Content>

      <Color background={['gray', 'darkest']}>
        <Spacer padding={['large', 0]}>
          <Content>
            <Grid>
              {({ GridWrapper, GridItemSixUp: Item }) => (
                <GridWrapper>
                  <Item>
                    <Spacer padding={['medium']}>
                      <Spacer margin={[0, 'auto']}>
                        <Sizer maxWidth={{ min: '30px', max: '50px' }}>
                          <IconStandardEmail />
                        </Sizer>
                      </Spacer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Spacer padding={['medium']}>
                      <Spacer margin={[0, 'auto']}>
                        <Sizer maxWidth={{ min: '30px', max: '50px' }}>
                          <IconStandardTwitter />
                        </Sizer>
                      </Spacer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Spacer padding={['medium']}>
                      <Spacer margin={[0, 'auto']}>
                        <Sizer maxWidth={{ min: '30px', max: '50px' }}>
                          <IconStandardFacebook />
                        </Sizer>
                      </Spacer>
                    </Spacer>
                  </Item>
                  <Item>
                    <Spacer padding={['medium']}>
                      <Spacer margin={[0, 'auto']}>
                        <Sizer maxWidth={{ min: '30px', max: '50px' }}>
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
      </Color>
    </section>
  </Page>
);

export default StyleguidePage;
