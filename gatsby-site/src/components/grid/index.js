import React from 'react';
import styles from './styles';

const {Swrapper, SitemTwoUp, SitemThreeUp, SitemSixUp} = styles;

const GridItemSixUp = ({children}) => {

  return (
    <SitemSixUp>{children}</SitemSixUp>
  );

};

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

const GridWrapper = ({children}) => {

  return (
    <Swrapper>{children}</Swrapper>
  );

};

const Grid = ({children}) => {

  return (
    <div>
      {children({GridWrapper, GridItemTwoUp, GridItemThreeUp, GridItemSixUp})}
    </div>
  );

};



export default Grid;
