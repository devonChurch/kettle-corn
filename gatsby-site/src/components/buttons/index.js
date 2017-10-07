import React from 'react';
import Link from 'gatsby-link';
import {Spacer} from '../scaffold';
import {createColor, spacing, misc} from '../../styles';
import styles from './styles';

const {Sprimary, Ssecondary, Stertiary, Sgroup} = styles;
const createPadding = (isLarge) => isLarge ? ['small', 'medium'] : ['smallest', 'small'];

const ButtonPrimary = ({children, color, href = '#', isLarge = false, isInverted = false}) => {

  const textColor = isInverted ? color : createColor('misc', 'white');
  const background = isInverted ? createColor('misc', 'white') : color;
  const padding = createPadding(isLarge);

  return (
    <Sprimary color={textColor} background={background} isLarge={isLarge}>
      <Link to={href}>
        <Spacer padding={padding}>
          {children}
        </Spacer>
      </Link>
    </Sprimary>
  );

};

const ButtonSecondary = ({children, color, href = '#', isLarge = false}) => {

  const padding = createPadding(isLarge);

  return (
    <Ssecondary color={color} isLarge={isLarge}>
      <Link to={href}>
        <Spacer padding={padding}>
          {children}
        </Spacer>
      </Link>
    </Ssecondary>
  );

};

const ButtonTertiary = ({children, color, href = '#'}) => {

  return (
    <Stertiary color={color}>
      <Link to={href}>
        <Spacer padding={['smallest']}>
          {children}
        </Spacer>
      </Link>
    </Stertiary>
  );

};

const buttons = {ButtonPrimary, ButtonSecondary, ButtonTertiary};

export {buttons as default, ButtonPrimary, ButtonSecondary, ButtonTertiary};
