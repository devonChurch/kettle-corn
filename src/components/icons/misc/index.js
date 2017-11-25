import React from 'react';
import PropTypes from 'prop-types';
import { createColor } from '../../../styles';
import styles from './styles';

const { Ssvg, SloaderWrapper, SloaderDot, SiconContainer } = styles;

const IconMiscArrow = ({ fill, display }) => {
  return (
    <Ssvg viewBox="0 0 14 14" fill={fill} display={display}>
      <polygon points="4.9,1.5 3.2,3.2 7.4,7 3.2,10.8 4.9,12.5 10.8,7 " />
    </Ssvg>
  );
};

IconMiscArrow.propTypes = {
  fill: PropTypes.array,
  display: PropTypes.string,
};

IconMiscArrow.defaultProps = {
  fill: ['misc', 'white'],
  display: 'block',
};

const IconMiscLoader = () => {
  const rows = 3;
  const columns = rows;
  const xAxis = 5;
  const yAxis = xAxis;
  const offset = 8;
  let delay = 0;
  const layers = new Array(columns)
    .fill(0)
    .map((_, column) => {
      return new Array(rows).fill(0).map((_, row) => (
        <SloaderDot key={`${column},${row}`} viewBox="0 0 26 26" delay={(delay += 1)}>
          <circle cx={xAxis + offset * row} cy={yAxis + offset * column} r="3" />
        </SloaderDot>
      ));
    })
    .reduce((accumulator, column) => [accumulator, ...column], []);

  return <SloaderWrapper>{layers}</SloaderWrapper>;
};

const IconContainer = ({ background, children }) => {
  return <SiconContainer background={background}>{children}</SiconContainer>;
};

IconContainer.propTypes = {
  background: PropTypes.array,
  children: PropTypes.node,
};

IconContainer.defaultProps = {
  background: ['gray'],
};

const icons = {
  IconMiscArrow,
  IconMiscLoader,
  IconContainer,
};

export { icons as default, IconMiscArrow, IconMiscLoader, IconContainer };
