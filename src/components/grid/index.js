import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const { Swrapper, SitemTwoUp, SitemThreeUp, SitemFourUp, SitemSixUp } = styles;

const propTypes = {
  children: PropTypes.node,
};

const GridItemTwoUp = ({ children }) => {
  return <SitemTwoUp>{children}</SitemTwoUp>;
};

GridItemTwoUp.propTypes = propTypes;

const GridItemThreeUp = ({ children }) => {
  return <SitemThreeUp>{children}</SitemThreeUp>;
};

GridItemThreeUp.propTypes = propTypes;

const GridItemFourUp = ({ children }) => {
  return <SitemFourUp>{children}</SitemFourUp>;
};

GridItemFourUp.propTypes = propTypes;

const GridItemSixUp = ({ children }) => {
  return <SitemSixUp>{children}</SitemSixUp>;
};

GridItemSixUp.propTypes = propTypes;

const GridWrapper = ({ children }) => {
  return <Swrapper>{children}</Swrapper>;
};

GridWrapper.propTypes = propTypes;

const Grid = ({ children }) => {
  return (
    <div>
      {children({ GridWrapper, GridItemTwoUp, GridItemThreeUp, GridItemFourUp, GridItemSixUp })}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.func,
};

export default Grid;
