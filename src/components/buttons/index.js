import React from 'react';
import Link from 'gatsby-link';
import { Spacer, Sizer } from '../scaffold';
import { IconMiscArrow } from '../icons';
import { createColor, spacing, misc } from '../../styles';
import styles from './styles';

const { Sprimary, Ssecondary, Stertiary, Squaternary, Sgroup, Sinline } = styles;
const createPadding = isLarge => (isLarge ? ['small', 'medium'] : ['smallest', 'small']);

const Anchor = ({ children, href }) => {
  const isSpecial =
    href.startsWith('#') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:') ||
    href.startsWith('http');

  return isSpecial ? <a href={href}>{children}</a> : <Link to={href}>{children}</Link>;
};

const ButtonPrimary = ({
  children,
  swatch = ['gray'],
  href = '#',
  isLarge = false,
  isInverted = false,
}) => {
  const textColor = isInverted ? swatch : ['misc', 'white'];
  const background = isInverted ? ['misc', 'white'] : swatch;
  const padding = createPadding(isLarge);

  return (
    <Sprimary color={textColor} background={background} isLarge={isLarge}>
      <Anchor href={href}>
        <Spacer padding={padding}>
          <IconMiscArrow color={createColor(...textColor)} />
          {children}
        </Spacer>
      </Anchor>
    </Sprimary>
  );
};

const ButtonSecondary = ({ children, swatch = ['gray'], href = '#', isLarge = false }) => {
  const padding = createPadding(isLarge);

  return (
    <Ssecondary color={swatch} isLarge={isLarge}>
      <Anchor href={href}>
        <Spacer padding={padding}>
          <IconMiscArrow color={createColor(...swatch)} />
          {children}
        </Spacer>
      </Anchor>
    </Ssecondary>
  );
};

const ButtonTertiary = ({ children, swatch = ['gray'], href = '#' }) => {
  return (
    <Stertiary color={swatch}>
      <Anchor href={href}>
        <Spacer padding={['smallest', 0]}>
          <IconMiscArrow color={createColor(...swatch)} />
          {children}
        </Spacer>
      </Anchor>
    </Stertiary>
  );
};

const ButtonQuaternary = ({ children, swatch = ['gray'], href = '#' }) => {
  return (
    <Squaternary color={swatch}>
      <Anchor href={href}>
        <Spacer padding={['smallest', 0]}>
          <IconMiscArrow color={createColor(...swatch)} />
          {children}
        </Spacer>
      </Anchor>
    </Squaternary>
  );
};

const ButtonInline = ({ children, swatch, href = '#' }) => {
  return (
    <Sinline color={swatch}>
      <Anchor href={href}>{children}</Anchor>
    </Sinline>
  );
};

const ButtonSubmit = ({ children, handleClick, isDisabled }) => {
  return (
    <Ssecondary color={['blue']}>
      <button onClick={handleClick} type="submit" disabled={isDisabled}>
        <Spacer padding={createPadding(false)}>
          <IconMiscArrow color={createColor('blue')} />
          {children}
        </Spacer>
      </button>
    </Ssecondary>
  );
};

const buttons = {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonQuaternary,
  ButtonInline,
  ButtonSubmit,
};

export {
  buttons as default,
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonQuaternary,
  ButtonInline,
  ButtonSubmit,
};
