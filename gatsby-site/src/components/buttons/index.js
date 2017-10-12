import React from 'react';
import Link from 'gatsby-link';
import {Spacer, Sizer} from '../scaffold';
import {IconMiscArrow} from '../icons';
import {createColor, spacing, misc} from '../../styles';
import styles from './styles';

const {Sprimary, Ssecondary, Stertiary, Squaternary, Sgroup, Sinline} = styles;
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
          <IconMiscArrow className="Button-arrow" color={textColor}/>
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
          <IconMiscArrow className="Button-arrow" color={color}/>
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
        <Spacer padding={['smallest', 0]}>
          <IconMiscArrow className="Button-arrow" color={color}/>
          {children}
        </Spacer>
      </Anchor>
    </Stertiary>
  );

};

const ButtonQuaternary = ({children, color = createColor('gray'), href = '#'}) => {

  return (
    <Squaternary color={color}>
      <Anchor href={href}>
        <Spacer padding={['smallest', 0]}>
          <IconMiscArrow className="Button-arrow" color={color}/>
          {children}
        </Spacer>
      </Anchor>
    </Squaternary>
  );

};

const ButtonInline = ({children, color, href = '#'}) => {

  return (
    <Sinline color={color}>
      <Anchor href={href}>
        {children}
      </Anchor>
    </Sinline>
  );

};

const buttons = {ButtonPrimary, ButtonSecondary, ButtonTertiary, ButtonQuaternary, ButtonInline};

export {buttons as default, ButtonPrimary, ButtonSecondary, ButtonTertiary, ButtonQuaternary, ButtonInline};
