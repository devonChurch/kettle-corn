import React from 'react';
import styles from './styles';

const {Swrapper, SitemThreeUp} = styles;

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
      {children({GridWrapper, GridItemThreeUp})}
    </div>
  );

};



export default Grid;
