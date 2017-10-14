import React from 'react';
import styles from './styles';

const {Swrapper, SitemTwoUp, SitemThreeUp, SitemFourUp, SitemSixUp} = styles;

const GridItemTwoUp = ({children}) => {

  return (
    <SitemTwoUp>{children}</SitemTwoUp>
  );

};

const GridItemThreeUp = ({children}) => {

  return (
    <SitemThreeUp>{children}</SitemThreeUp>
  );

};

const GridItemFourUp = ({children}) => {

  return (
    <SitemFourUp>{children}</SitemFourUp>
  );

};

const GridItemSixUp = ({children}) => {

  return (
    <SitemSixUp>{children}</SitemSixUp>
  );

};

const GridWrapper = ({children}) => {

  return (
    <Swrapper>{children}</Swrapper>
  );

};

const Grid = ({children}) => {

  return (
    <div>
      {children({GridWrapper, GridItemTwoUp, GridItemThreeUp, GridItemFourUp, GridItemSixUp})}
    </div>
  );

};



export default Grid;
