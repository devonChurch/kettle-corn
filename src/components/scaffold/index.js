import React from 'react';
import PropTypes from 'prop-types';
import { spacing } from '../../styles';
import styles from './styles';

const { Spage, Scontent, Sspacer, Scolor, Ssizer, SbuttonGroup, SflexWrapper, SflexItem } = styles;

const Color = ({ children, color, background, display }) => {
  return (
    <Scolor background={background} color={color} display={display}>
      {children}
    </Scolor>
  );
};

Color.propTypes = {
  children: PropTypes.node,
  color: PropTypes.array,
  background: PropTypes.array,
  display: PropTypes.string,
};

Color.defaultProps = {
  display: 'block',
};

const Page = ({ children, background }) => {
  return (
    <Color background={background}>
      <Spage>{children}</Spage>
    </Color>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  background: PropTypes.array,
};

Page.defaultProps = {
  background: ['misc', 'white'],
};

const Spacer = ({ children, color, margin, padding, isInline }) => {
  return (
    <Sspacer color={color} margin={margin} padding={padding} isInline={isInline}>
      {children}
    </Sspacer>
  );
};

Spacer.propTypes = {
  children: PropTypes.node,
  color: PropTypes.array,
  margin: PropTypes.array,
  padding: PropTypes.array,
  isInline: PropTypes.bool,
};

Spacer.defaultProps = {
  isInline: false,
};

const Sizer = ({
  children,
  color,
  isInline,
  isCenter,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}) => {
  return (
    <Ssizer
      color={color}
      isInline={isInline}
      isCenter={isCenter}
      size={[height, width]}
      minWidth={minWidth}
      maxWidth={maxWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
    >
      {children}
    </Ssizer>
  );
};

Sizer.propTypes = {
  children: PropTypes.node,
  color: PropTypes.array,
  isInline: PropTypes.bool,
  isCenter: PropTypes.bool,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
};

Sizer.defaultProps = {
  isInline: false,
  isCenter: false,
  width: 'auto',
  minWidth: 'initial',
  maxWidth: 'initial',
  height: 'auto',
  minHeight: 'initial',
  maxHeight: 'initial',
};

const Content = ({ children, color }) => {
  return (
    <Scontent color={color}>
      <Spacer padding={[0, 'medium']}>{children}</Spacer>
    </Scontent>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  color: PropTypes.array,
};

const ButtonGroup = ({ children }) => {
  return (
    <Spacer margin={['-medium', 0, 0, '-small']}>
      <SbuttonGroup>{children}</SbuttonGroup>
    </Spacer>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
};

const FlexItem = ({ children, grow, order }) => {
  return (
    <SflexItem grow={grow} order={order}>
      {children}
    </SflexItem>
  );
};

FlexItem.propTypes = {
  children: PropTypes.node,
  grow: PropTypes.string,
  order: PropTypes.string,
};

const FlexWrapper = ({ children, align, direction, justify, wrap }) => {
  return (
    <SflexWrapper align={align} direction={direction} justify={justify} wrap={wrap}>
      {children}
    </SflexWrapper>
  );
};

FlexItem.propTypes = {
  children: PropTypes.node,
  align: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.string,
};

const Flexer = ({ children }) => {
  return children({
    Wrapper: FlexWrapper,
    Item: FlexItem,
  });
};

FlexItem.propTypes = {
  children: PropTypes.node,
};

const scaffold = { Page, Content, Spacer, Color, Sizer, ButtonGroup, Flexer };

export { scaffold as default, Page, Content, Spacer, Color, Sizer, ButtonGroup, Flexer };
