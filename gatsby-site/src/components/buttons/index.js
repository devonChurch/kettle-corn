import React from 'react';
import Link from 'gatsby-link';
import {Spacer} from '../scaffold';
import {createColor, spacing, misc} from '../../styles';
import styles from './styles';

const {Sprimary, Ssecondary, Stertiary, Sgroup} = styles;
const createPadding = (isLarge) => isLarge ? ['small', 'medium'] : ['smallest', 'small'];

const Anchor = ({children, href}) => {

    const isSpecial = href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http');

    return isSpecial ? <a href={href}>{children}</a> : <Link to={href}>{children}</Link>;

};

const ButtonPrimary = ({children, color, href = '#', isLarge = false, isInverted = false}) => {

  const textColor = isInverted ? color : createColor('misc', 'white');
  const background = isInverted ? createColor('misc', 'white') : color;
  const padding = createPadding(isLarge);

  return (
    <Sprimary color={textColor} background={background} isLarge={isLarge}>
      <Anchor href={href}>
        <Spacer padding={padding}>
          {children}
        </Spacer>
      </Anchor>
    </Sprimary>
  );

};

const ButtonSecondary = ({children, color, href = '#', isLarge = false}) => {

  const padding = createPadding(isLarge);

  return (
    <Ssecondary color={color} isLarge={isLarge}>
      <Anchor href={href}>
        <Spacer padding={padding}>
          {children}
        </Spacer>
      </Anchor>
    </Ssecondary>
  );

};

const ButtonTertiary = ({children, color = createColor('gray'), href = '#'}) => {

  return (
    <Stertiary color={color}>
      <Anchor href={href}>
        <Spacer padding={['smallest']}>
          {children}
        </Spacer>
      </Anchor>
    </Stertiary>
  );

};

const buttons = {ButtonPrimary, ButtonSecondary, ButtonTertiary};

export {buttons as default, ButtonPrimary, ButtonSecondary, ButtonTertiary};
