import React from 'react';
import styled from 'styled-components';
import {Spacer} from '../scaffold';
import styles from './styles';

const {SheadingOne, SheadingTwo, SheadingThree} = styles;

const HeadingOne = ({children, color}) => {

  return (
    <Spacer padding={[0, 0, 'large']}>
      <SheadingOne color={color}>
          {children}
      </SheadingOne>
    </Spacer>
  );

};

const HeadingTwo = ({children, color}) => {

  return (
    <Spacer padding={[0, 0, 'large']}>
      <SheadingTwo color={color}>
          {children}
      </SheadingTwo>
    </Spacer>
  );

};

const HeadingThree = ({children, color}) => {

  return (
    <Spacer padding={[0, 0, 'medium']}>
      <SheadingThree color={color}>
          {children}
      </SheadingThree>
    </Spacer>
  );

};

const headings = {HeadingOne, HeadingTwo, HeadingThree};

export {headings as default, HeadingOne, HeadingTwo, HeadingThree};
