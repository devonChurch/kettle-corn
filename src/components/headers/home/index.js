import React from 'react';
import Link from 'gatsby-link';
import Hero from '../../hero';
import { Spacer, Flexer, Sizer, ButtonGroup } from '../../scaffold';
import { ButtonSecondary, ButtonPrimary, ButtonTertiary } from '../../buttons';
import { LogoWithText } from '../../logo';
import { HeadingOne } from '../../headings';
import navigation from '../../../data/navigation';
import { createColor } from '../../../styles';

const HeaderHome = () => {
  return (
    <Hero
      background={['blue']}
      arrow={['left', 'bottom']}
      padding={['medium', 0, 'largest']}
      element="header"
    >
      <Spacer margin={[0, '-small']} padding={[0, 0, 'large']}>
        <Flexer>
          {({ Wrapper, Item }) => (
            <Wrapper wrap="wrap" justify="flex-end">
              {navigation.main.map(({ name, path }) => (
                <Item key={path}>
                  <Spacer padding={[0, 'small']}>
                    <ButtonTertiary href={path} swatch={['misc', 'white']}>
                      {name}
                    </ButtonTertiary>
                  </Spacer>
                </Item>
              ))}
            </Wrapper>
          )}
        </Flexer>
      </Spacer>

      <Sizer width="75vw" minWidth="250px" maxWidth="380px">
        <LogoWithText color="blue" background={['blue']} />
      </Sizer>

      <Spacer padding={['large', 0, 0]}>
        <ButtonGroup>
          <ButtonSecondary href={navigation.services.path} swatch={['misc', 'white']} isLarge>
            {navigation.services.name}
          </ButtonSecondary>
          <ButtonPrimary href={navigation.contact.path} swatch={['blue']} isInverted isLarge>
            Apple
          </ButtonPrimary>
        </ButtonGroup>
      </Spacer>
    </Hero>
  );
};

export default HeaderHome;
