import React from 'react';
import Link from 'gatsby-link';
import Hero from '../../hero';
import { Spacer, Flexer, Sizer, Color } from '../../scaffold';
import { ButtonTertiary } from '../../buttons';
import { LogoNoText } from '../../logo';
import { HeadingOne } from '../../headings';
import navigation from '../../../data/navigation';
import { createColor, spacing } from '../../../styles';

const HeaderStandard = ({ children, title = 'Enhance Digital', background }) => {
  return (
    <Hero
      background={background}
      arrow={['left', 'bottom']}
      element="header"
      padding={['medium', 0, 'large']}
    >
      <Spacer margin={[0, '-small']}>
        <Flexer>
          {({ Wrapper, Item }) => (
            <Wrapper wrap="wrap" justify="space-between">
              <Item grow="1">
                <Spacer padding={[0, 'small']}>
                  <ButtonTertiary href="/" swatch={['misc', 'white']}>
                    back
                  </ButtonTertiary>
                </Spacer>
              </Item>
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

      <Spacer padding={[spacing.medium.max, 0, 0]}>
        <Flexer>
          {({ Wrapper, Item }) => (
            <Wrapper wrap="wrap" align="center">
              <Item>
                <Spacer padding={[0, 'large', 0, 0]}>
                  <Link to="/">
                    <Sizer width={{ min: '80px', max: '100px' }}>
                      <LogoNoText color="yellow" background={createColor('yellow')} />
                    </Sizer>
                  </Link>
                </Spacer>
              </Item>
              <Item grow="1">
                <Spacer padding={['medium', 0]}>
                  <HeadingOne color={createColor('misc', 'white')} isSpaceless>
                    {title}
                  </HeadingOne>
                </Spacer>
              </Item>
            </Wrapper>
          )}
        </Flexer>
      </Spacer>
    </Hero>
  );
};

export default HeaderStandard;
