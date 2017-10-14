import React from 'react';
import Link from 'gatsby-link';
import Hero from '../../hero';
import Grid from '../../grid';
import {Spacer, Flexer, Sizer} from '../../scaffold';
import {ButtonQuaternary} from '../../buttons';
import {LogoNoText} from '../../logo';
import {HeadingTwo, Text} from '../../headings';
import contact from '../../../data/contact';
import {createColor} from '../../../styles';

const FooterStandard = ({children, title = 'Enhance Digital', background}) => {

  return (
    <Hero color={createColor('blue')} arrow={['left', 'top']} element="footer" padding={['largest', 0, 'large']}>

      <Text color={createColor('misc', 'white')}>

        <HeadingTwo id="talk-to-us" color={createColor('misc', 'white')}>We love working with <strong>local businesses</strong></HeadingTwo>

        <Spacer margin={['-medium', 0, 0]}>
          <Text isBlock color={createColor('blue', 'darkest')}>Contact us to talk about your growing your digital presence today.</Text>
        </Spacer>

        <Spacer margin={['large', '-medium', 0]}>
          <Grid>
            {({GridWrapper, GridItemTwoUp: Item}) => (
              <GridWrapper>

                {Object.keys(contact).map((key) => {

                  const {display, href, Icon} = contact[key];

                  return (
                    <Item key={key}>
                      <Spacer padding={[0, 'medium', 'medium']}>
                        <Flexer>
                          {({Wrapper, Item}) => (
                            <Wrapper align="center">
                              <Item>
                                <Sizer width={{min: '20px', max: '30px'}}>
                                  <Icon />
                                </Sizer>
                              </Item>
                              <Item>
                                <Spacer padding={[0, 0, 0, 'medium']}>
                                  <ButtonQuaternary color={createColor('misc', 'white')} href={href}>{display}</ButtonQuaternary>
                                </Spacer>
                              </Item>
                            </Wrapper>
                          )}
                        </Flexer>
                      </Spacer>
                    </Item>
                  );

                })}

              </GridWrapper>
            )}
            </Grid>
          </Spacer>

      </Text>

    </Hero>
  );

};

export default FooterStandard;
