import React from 'react';
import PropTypes from 'prop-types';
import { createColor } from '../../styles';
import partners from '../../data/partners';
import Grid from '../grid';
import { ButtonTertiary } from '../buttons';
import { Spacer, Sizer, Flexer } from '../scaffold';
import styles from './styles';

const { Stile, Slogo, Sbutton, Sinteraction } = styles;

const Partners = () => {
  return (
    <Stile>
      <Flexer>
        {({ Wrapper, Item }) => (
          <Wrapper wrap="wrap" justify="center">
            {partners.map(({ name, logo, website }) => (
              <Item key={name}>
                <Sizer minWidth="150px" maxWidth="260px">
                  <Spacer padding={['medium']}>
                    <Sinteraction>
                      <Slogo src={logo} alt={name} />
                      <Sbutton>
                        <ButtonTertiary swatch={['blue']} href={website}>
                          Visit site
                        </ButtonTertiary>
                      </Sbutton>
                    </Sinteraction>
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
