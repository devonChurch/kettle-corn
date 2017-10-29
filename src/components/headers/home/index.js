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
      background={['yellow']}
      arrow={['left', 'bottom']}
      padding={['medium', 0, 'large']}
      element="header"
    >
      <Spacer margin={[0, '-small']} padding={[0, 0, 'medium']}>
        <Flexer>
          {({ Wrapper, Item }) => (
            <Wrapper wrap="wrap" justify="flex-end">
              {navigation.main.map(({ name, path }) => (
                <Item key={path}>
                  <Spacer padding={[0, 'small']}>
                    <ButtonTertiary href={path} color={createColor('misc', 'white')}>
                      {name}
                    </ButtonTertiary>
                  </Spacer>
                </Item>
              ))}
            </Wrapper>
          )}
        </Flexer>
      </Spacer>

      <Sizer maxWidth={{ min: '300px', max: '384px' }}>
        <LogoWithText color="yellow" background={createColor('yellow')} />
      </Sizer>

      <Spacer padding={['large', 0, 0]}>
        <ButtonGroup>
          <ButtonSecondary
            href={navigation.services.path}
            color={createColor('misc', 'white')}
            isLarge
          >
            {navigation.services.name}
          </ButtonSecondary>
          <ButtonPrimary
            href={navigation.contact.path}
            color={createColor('yellow')}
            isInverted
            isLarge
          >
            Talk to us
          </ButtonPrimary>
        </ButtonGroup>
      </Spacer>
    </Hero>
  );
};

export default HeaderHome;
