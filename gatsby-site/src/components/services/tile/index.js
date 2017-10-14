import React from 'react';
import {createColor} from '../../../styles';
import {Spacer, Sizer, Flexer} from '../../scaffold';
import {HeadingThree, Text} from '../../headings';
import {ButtonTertiary} from '../../buttons';

const ServicesTile = ({title, id, color, Icon, blurb}) => {

  return (
    <Flexer>
      {({Wrapper, Item}) => (
        <Wrapper direction="column">
          <Item grow="1">
            <Spacer padding={[0, 'medium', 'small']}>
              <Spacer margin={[0, 0, 0, '-20px']}>
                <Sizer width="100px">
                  <Icon />
                </Sizer>
              </Spacer>
              <HeadingThree color={createColor(color)}>{title}</HeadingThree>
              <Text color={createColor(color, 'darkest')}>{blurb}</Text>
            </Spacer>
          </Item>
          <Item>
            <Spacer padding={[0, 'medium', 'largest']}>
              <ButtonTertiary href={`/services#${id}`} color={createColor(color)}>Read more</ButtonTertiary>
            </Spacer>
          </Item>
        </Wrapper>
      )}
    </Flexer>
  );

};

export default ServicesTile;
