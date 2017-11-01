import React from 'react';
import PropTypes from 'prop-types';
import contact from '../../../data/contact';
import Grid from '../../grid';
import { Spacer, Flexer, Sizer } from '../../scaffold';
import { ButtonQuaternary } from '../../buttons';
import { createColor } from '../../../styles';
import styles from './styles';

const { Sicon } = styles;

const ContactOptions = ({ swatch }) => {
  return (
    <Spacer margin={[0, '-medium']}>
      <Grid>
        {({ GridWrapper, GridItemTwoUp: Item }) => (
          <GridWrapper>
            {Object.keys(contact).map(key => {
              const { display, href, Icon } = contact[key];

              return (
                <Item key={key}>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({ Wrapper, Item }) => (
                        <Wrapper align="center">
                          <Item>
                            <Sicon width={{ min: '20px', max: '30px' }}>
                              <Icon color={createColor(...swatch)} />
                            </Sicon>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonQuaternary swatch={swatch} href={href}>
                                {display}
                              </ButtonQuaternary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>
              );
            })}
          </GridWrapper>
        )}
      </Grid>
    </Spacer>
  );
};

ContactOptions.propTypes = {
  swatch: PropTypes.array,
};

ContactOptions.defaultProps = {
  swatch: ['gray'],
};

export default ContactOptions;
