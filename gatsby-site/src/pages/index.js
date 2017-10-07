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
          <Spacer padding={['largest', 0, 'largest']}>
            <Content>

              <HeadingTwo>Colors</HeadingTwo>
              {Object.keys(colors).map((key) => <ColorList key={key} heading={key} options={colors[key]}/>)}

            </Content>
          </Spacer>
        </section>

        <section>
          <Content>

            <HeadingTwo>Headings</HeadingTwo>

          </Content>

          <Spacer color={createColor('blue', 'medium')} padding={['largest', 0, 'large']}>
            <Content>

              <HeadingOne color={createColor('gray', 'darkest')}>{createDummyHeading()}</HeadingOne>
              <HeadingTwo color={createColor('orange', 'medium')}>{createDummyHeading()}</HeadingTwo>
              <HeadingThree color={createColor('misc', 'white')}>{createDummyHeading()}</HeadingThree>

            </Content>
          </Spacer>

          <Spacer padding={['largest', 0, 'large']}>
            <Content>

              <HeadingOne color={createColor('green', 'medium')}>{createDummyHeading()}</HeadingOne>
              <HeadingTwo color={createColor('orange', 'darkest')}>{createDummyHeading()}</HeadingTwo>
              <HeadingThree color={createColor('blue', 'darkest')}>{createDummyHeading()}</HeadingThree>

            </Content>
          </Spacer>

          <Spacer color={createColor('gray', 'darkest')} padding={['largest', 0, 'large']}>
            <Content>

              <HeadingOne color={createColor('blue', 'medium')}>{createDummyHeading()}</HeadingOne>
              <HeadingTwo color={createColor('pink', 'medium')}>{createDummyHeading()}</HeadingTwo>
              <HeadingThree color={createColor('yellow', 'medium')}>{createDummyHeading()}</HeadingThree>

            </Content>
          </Spacer>

        </section>


        <section>
          <Spacer padding={['largest', 0, 'large']}>
            <Content>

              <HeadingTwo>Buttons</HeadingTwo>

              <Spacer padding={[0, 0, 'large']}>
                <ButtonGroup>
                  <ButtonPrimary href="#" color={createColor('green', 'medium')} isLarge>Primary</ButtonPrimary>
                  <ButtonSecondary href="#" color={createColor('green', 'medium')} isLarge>Secondary</ButtonSecondary>
                </ButtonGroup>
              </Spacer>

              <Spacer padding={[0, 0, 'large']}>
                <ButtonGroup>
                  <ButtonPrimary href="#" color={createColor('pink', 'medium')}>Primary</ButtonPrimary>
                  <ButtonSecondary href="#" color={createColor('pink', 'medium')}>Secondary</ButtonSecondary>
                </ButtonGroup>
              </Spacer>

              <Spacer>
                <ButtonTertiary href="#" color={createColor('purple', 'medium')}>Tertiary</ButtonTertiary>
              </Spacer>

            </Content>
          </Spacer>

          <Spacer padding={['large', 0]} color={createColor('yellow', 'medium')}>
            <Content>

              <Spacer padding={[0, 0, 'large']}>
                <ButtonGroup>
                  <ButtonPrimary href="#" color={createColor('gray', 'darkest')} isInverted isLarge>Primary</ButtonPrimary>
                  <ButtonSecondary href="#" color={createColor('misc', 'white')} isLarge>Secondary</ButtonSecondary>
                </ButtonGroup>
              </Spacer>

              <Spacer padding={[0, 0, 'large']}>
                <ButtonGroup>
                  <ButtonPrimary href="#" color={createColor('yellow', 'medium')} isInverted>Primary</ButtonPrimary>
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

              <HeadingTwo color={createColor('orange', 'medium')}>Markdown</HeadingTwo>

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
                      <Spacer color={createColor('orange', 'medium')} padding={['largest', 0]} />
                    </Item>
                    <Item>
                      <Spacer color={createColor('purple', 'medium')} padding={['largest', 0]} />
                    </Item>
                    <Item>
                      <Spacer color={createColor('green', 'medium')} padding={['largest', 0]} />
                    </Item>
                  </GridWrapper>
                )}
              </Grid>

            </Content>
          </Spacer>

        </section>


        <section>
        <Spacer padding={[0, 0, 'largest']}>
          <Content>

            <HeadingTwo>Spacing</HeadingTwo>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Largest</HeadingThree>
              <Spacer isInline color={createColor('blue', 'medium')} padding={['largest']}>
                <Spacer color={createColor('pink', 'medium')} padding={['largest', 0, 0, 'largest']}/>
              </Spacer>
            </Spacer>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Large</HeadingThree>
              <Spacer isInline color={createColor('blue', 'medium')} padding={['large']}>
                <Spacer color={createColor('pink', 'medium')} padding={['large', 0, 0, 'large']}/>
              </Spacer>
            </Spacer>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Medium</HeadingThree>
              <Spacer isInline color={createColor('blue', 'medium')} padding={['medium']}>
                <Spacer color={createColor('pink', 'medium')} padding={['medium', 0, 0, 'medium']}/>
              </Spacer>
            </Spacer>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Small</HeadingThree>
              <Spacer isInline color={createColor('blue', 'medium')} padding={['small']}>
                <Spacer color={createColor('pink', 'medium')} padding={['small', 0, 0, 'small']}/>
              </Spacer>
            </Spacer>

            <Spacer padding={['large', 0, 0]}>
              <HeadingThree>Smallest</HeadingThree>
              <Spacer isInline color={createColor('blue', 'medium')} padding={['smallest']}>
                <Spacer color={createColor('pink', 'medium')} padding={['smallest', 0, 0, 'smallest']}/>
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
        </Spacer>


        </section>

  </div>
)

export default IndexPage
