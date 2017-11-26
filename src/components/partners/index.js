import React from 'react';
import PropTypes from 'prop-types';
import { createColor } from '../../styles';
import partners from '../../data/partners';
import Grid from '../grid';
import { Spacer, Sizer, Flexer } from '../scaffold';
import styles from './styles';

const { Stile, Slogo } = styles;

const Partners = () => {
  return (
    <Stile>
      <Flexer>
        {({ Wrapper, Item }) => (
          <Wrapper wrap="wrap" justify="center">
            {partners.map(({ name, logo }) => (
              <Item key={name}>
                <Sizer minWidth="150px" maxWidth="260px">
                  <Spacer padding={['medium']}>
                    <Slogo src={logo} alt={name} />
                  </Spacer>
                </Sizer>
              </Item>
            ))}
          </Wrapper>
        )}
      </Flexer>
    </Stile>
  );
};

export default Partners;
