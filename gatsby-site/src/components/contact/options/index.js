import React from 'react';
import contact from '../../../data/contact';
import Grid from '../../grid';
import {Spacer, Flexer, Sizer} from '../../scaffold';
import {ButtonQuaternary} from '../../buttons';
import {createColor} from '../../../styles';

const ContactOptions = ({color = createColor('gray')}) => {

  return (
    <Spacer margin={[0, '-medium']}>
      <Grid>
        {({GridWrapper, GridItemTwoUp: Item}) => (
          <GridWrapper>

            {Object.keys(contact).map((key) => {

              const {display, href, Icon} = contact[key];

              return (
                <Item key={key}>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <Icon color={color}/>
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonQuaternary color={color} href={href}>{display}</ButtonQuaternary>
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

export default ContactOptions;
