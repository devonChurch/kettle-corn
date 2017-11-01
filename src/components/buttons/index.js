import React from 'react';
import PropTypes from 'prop-types';
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

const propTypes = {
  children: PropTypes.node,
  swatch: PropTypes.array,
  href: PropTypes.string.isRequired,
};

const ButtonPrimary = ({ children, swatch, href, isLarge, isInverted }) => {
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

ButtonPrimary.propTypes = {
  ...propTypes,
  isLarge: PropTypes.bool,
  isInverted: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  swatch: ['gray'],
  isLarge: false,
  isInverted: false,
};

const ButtonSecondary = ({ children, swatch, href, isLarge }) => {
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

ButtonSecondary.propTypes = {
  ...propTypes,
  isLarge: PropTypes.bool,
};

ButtonSecondary.defaultProps = {
  swatch: ['gray'],
  isLarge: false,
};

const ButtonTertiary = ({ children, swatch, href }) => {
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

ButtonTertiary.propTypes = propTypes;

ButtonTertiary.defaultProps = {
  swatch: ['gray'],
};

const ButtonQuaternary = ({ children, swatch, href }) => {
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

ButtonQuaternary.propTypes = propTypes;

ButtonQuaternary.defaultProps = {
  swatch: ['gray'],
};

const ButtonInline = ({ children, swatch, href }) => {
  return (
    <Sinline color={swatch}>
      <Anchor href={href}>{children}</Anchor>
    </Sinline>
  );
};

ButtonInline.propTypes = propTypes;

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

ButtonSubmit.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
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
