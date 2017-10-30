import React from 'react';
import { createColor } from '../../../styles';
import { Spacer, Sizer, Flexer } from '../../scaffold';
import { HeadingThree, Text } from '../../headings';
import { ButtonTertiary } from '../../buttons';

const ServicesTile = ({ title, id, swatch, Icon, blurb }) => {
  return (
    <Flexer>
      {({ Wrapper, Item }) => (
        <Wrapper direction="column">
          <Item grow="1">
            <Spacer padding={[0, 'medium', 'small']}>
              <Spacer margin={[0, 0, 0, '-20px']}>
                <Sizer width="100px">
                  <Icon />
                </Sizer>
              </Spacer>
              <HeadingThree color={[createColor(swatch)]}>{title}</HeadingThree>
              <Text color={createColor(swatch, 'darkest')}>{blurb}</Text>
            </Spacer>
          </Item>
          <Item>
            <Spacer padding={[0, 'medium', 'largest']}>
              <ButtonTertiary href={`/services#${id}`} swatch={[swatch]}>
                Read more
              </ButtonTertiary>
            </Spacer>
          </Item>
        </Wrapper>
      )}
    </Flexer>
  );
};

export default ServicesTile;
