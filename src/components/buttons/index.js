import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Spacer, Sizer } from '../scaffold';
import { IconMiscArrow } from '../icons';
import { createColor, spacing, misc } from '../../styles';
import styles from './styles';

const { Sprimary, Ssecondary, Stertiary, Squaternary, Sgroup, Sinline, Sicon, Shover } = styles;
const createPadding = isLarge => (isLarge ? ['small', 'medium'] : ['smallest', 'small']);

const Anchor = ({ children, href, isHover }) => {
  const isSpecial =
    href.startsWith('#') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:') ||
    href.startsWith('http');

  switch (true) {
    case Boolean(isHover && isSpecial):
      return (
        <Shover isHover>
          <a href={href}>{children}</a>
        </Shover>
      );

    case Boolean(isHover):
      return (
        <Shover isHover>
          <Link to={href}>{children}</Link>
        </Shover>
      );

    case Boolean(isSpecial):
      return <a href={href}>{children}</a>;

    default:
      return <Link to={href}>{children}</Link>;
  }
};

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

Anchor.defaultProps = {
  isFocus: false,
};

const propTypes = {
  children: PropTypes.node.isRequired,
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
          <IconMiscArrow fill={textColor} />
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
          <IconMiscArrow fill={swatch} />
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
          <IconMiscArrow fill={swatch} />
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
          <IconMiscArrow fill={swatch} />
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
          <IconMiscArrow fill={['blue']} />
          {children}
        </Spacer>
      </button>
    </Ssecondary>
  );
};

ButtonSubmit.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

ButtonSubmit.defaultProps = {
  isDisabled: false,
};

const ButtonIcon = ({ Icon, handleClick, swatch, isDisabled }) => {
  return (
    <Sicon swatch={swatch}>
      <button onClick={handleClick} type="button" disabled={isDisabled}>
        <Spacer padding={['5px']}>
          <Sizer width="30px">
            <Icon color={swatch} />
          </Sizer>
        </Spacer>
      </button>
    </Sicon>
  );
};

ButtonIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  swatch: PropTypes.array,
  isDisabled: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  swatch: ['gray'],
  isDisabled: false,
};

const buttons = {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonQuaternary,
  ButtonInline,
  ButtonSubmit,
  ButtonIcon,
  Anchor,
};

export {
  buttons as default,
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonQuaternary,
  ButtonInline,
  ButtonSubmit,
  ButtonIcon,
  Anchor,
};
