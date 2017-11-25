import React from 'react';
import navigation from '../../../data/navigation';
import Hero from '../../hero';
import Divider from '../../dividers';
import { LogoNoText } from '../../logo';
import { Anchor, ButtonTertiary, ButtonIcon } from '../../buttons';
import { Spacer, Sizer, Content, Flexer, Color } from '../../scaffold';
import { IconStandardArrowUp } from '../../icons';

const FooterSimple = () => {
  return (
    <Spacer>
      <Hero
        background={['blue']}
        arrow={['left', 'top']}
        element="footer"
        padding={['large', 0, 'large']}
      >
        <Spacer margin={[0, '-small']} padding={[0, 0, 'medium']}>
          <Flexer>
            {({ Wrapper, Item }) => (
              <Wrapper wrap="wrap">
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

        <Divider background={['blue', 'light']} />

        <Spacer padding={['medium', 0, 0]}>
          <Flexer>
            {({ Wrapper, Item }) => (
              <Wrapper justify="space-between">
                <Item>
                  <Sizer width="66px">
                    <Anchor href="/" isHover>
                      <LogoNoText color="blue" background={['blue']} />
                    </Anchor>
                  </Sizer>
                </Item>
                <Item>
                  <ButtonIcon
                    Icon={IconStandardArrowUp}
                    swatch={['misc', 'white']}
                    handleClick={() => window.scrollTo(0, 0)}
                  />
                </Item>
              </Wrapper>
            )}
          </Flexer>
        </Spacer>
      </Hero>
      <Color background={['blue', 'darkest']}>
        <Sizer height="smallest" />
      </Color>
    </Spacer>
  );
};

export default FooterSimple;
