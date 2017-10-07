import React from 'react';
import styles from './styles';

const {Swrapper, SitemThreeUp, SitemSixUp} = styles;

const GridItemSixUp = ({children}) => {

  return (
    <SitemSixUp>{children}</SitemSixUp>
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
      {children({GridWrapper, GridItemThreeUp, GridItemSixUp})}
    </div>
  );

};



export default Grid;
