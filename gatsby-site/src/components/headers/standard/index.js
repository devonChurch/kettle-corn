import React from 'react';
import Link from 'gatsby-link';
import Hero from '../../hero';
import {Spacer, Flexer, Sizer} from '../../scaffold';
import {ButtonTertiary} from '../../buttons';
import {LogoNoText} from '../../logo';
import {HeadingOne} from '../../headings';
import navigation from '../../../data/navigation';
import {createColor} from '../../../styles';

const HeaderStandard = ({children, title = 'Enhance Digital', background}) => {

  return (
    <Hero color={background} arrow={['left', 'bottom']} element="header" padding={['medium', 0, 'large']}>

      <Spacer margin={[0, '-small']} padding={[0, 0, 'medium']}>
        <Flexer>
          {({Wrapper, Item}) => (
            <Wrapper wrap="wrap" justify="space-between">
              <Item grow="1">
                <Spacer padding={[0, 'small']}>
                  <ButtonTertiary href="/" color={createColor('misc', 'white')}>back</ButtonTertiary>
                </Spacer>
              </Item>
              {navigation.main.map(({name, path}) => (
                <Item key={path}>
                  <Spacer padding={[0, 'small']}>
                    <ButtonTertiary href={path} color={createColor('misc', 'white')}>{name}</ButtonTertiary>
                  </Spacer>
                </Item>
              ))}
            </Wrapper>
          )}
        </Flexer>
      </Spacer>

      <Flexer>
        {({Wrapper, Item}) => (
          <Wrapper wrap="wrap" align="center">
            <Item>
              <Spacer padding={[0, 'large', 0, 0]}>
                <Link to="/">
                  <Sizer width={{ min: '80px', max: '100px' }}>
                    <LogoNoText color="yellow" background={createColor('yellow')}/>
                  </Sizer>
                </Link>
              </Spacer>
            </Item>
            <Item grow="1">
              <Spacer padding={['medium', 0]}>
                <HeadingOne color={createColor('misc', 'white')} isSpaceless>{title}</HeadingOne>
              </Spacer>
            </Item>
          </Wrapper>
        )}
      </Flexer>

    </Hero>
  );

};

export default HeaderStandard;