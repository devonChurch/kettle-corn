import React from 'react';
import {createColor} from '../../styles';
import partners from '../../data/partners';
import Grid from '../grid';
import {Spacer, Sizer, Flexer} from '../scaffold';
import styles from './styles';

const {Slogo} = styles;


const Partners = ({title, id, color, Icon, blurb}) => {

  return (
    <Grid>
      {({GridWrapper, GridItemFourUp: Item}) => (
        <GridWrapper>

          {partners.map(({name, logo}) => (
            <Item key={name}>
              <Spacer padding={['medium', 0]}>
                <Slogo src={logo} alt={name}/>
              </Spacer>
            </Item>
          ))}

        </GridWrapper>
      )}
    </Grid>
  );

};

export default Partners;
