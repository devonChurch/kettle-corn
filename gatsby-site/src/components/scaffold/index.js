import React from 'react';
import {spacing} from '../../styles';
import styles from './styles';

const {Spage, Scontent, Sspacer, Ssizer, SbuttonGroup, SflexWrapper, SflexItem} = styles;

const Page = ({children, background}) => {

  return (
    <Spage background={background}>
      {children}
    </Spage>
  );

};

const Spacer = ({children, color, margin, padding, isInline = false}) => {

  return (
    <Sspacer color={color} margin={margin} padding={padding} isInline={isInline}>
      {children}
    </Sspacer>
  );

};

const Sizer = ({children, color, isInline = false, isCenter = false, width = 'auto', minWidth = 'initial', maxWidth = 'initial', height = 'auto', minHeight = 'initial', maxHeight = 'initial'}) => {

  return (
    <Ssizer color={color} isInline={isInline} isCenter={isCenter} size={[height, width]} minWidth={minWidth} maxWidth={maxWidth} minHeight={minHeight} maxHeight={maxHeight}>
      {children}
    </Ssizer>
  );

};

const Content = ({children, color}) => {

  return (
    <Scontent color={color}>
      <Spacer padding={[0, 'medium']}>
        {children}
      </Spacer>
    </Scontent>
  );

};

const ButtonGroup = ({children}) => {

  return (
    <Spacer margin={['-medium', 0, 0, '-small']}>
      <SbuttonGroup>
        {children}
      </SbuttonGroup>
    </Spacer>
  );

};

const FlexItem = ({children, grow, order}) => {

  return (
    <SflexItem grow={grow} order={order}>
      {children}
    </SflexItem>
  );

};

const FlexWrapper = ({children, align, direction, justify, wrap}) => {

  return (
    <SflexWrapper align={align} direction={direction} justify={justify} wrap={wrap}>
      {children}
    </SflexWrapper>
  );

};

const Flexer = ({children}) => {

  return (
    children({
      Wrapper: FlexWrapper,
      Item: FlexItem
    })
  );

};

const scaffold = {Page, Content, Spacer, Sizer, ButtonGroup, Flexer};

export {scaffold as default, Page, Content, Spacer, Sizer, ButtonGroup, Flexer};
