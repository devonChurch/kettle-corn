import React from 'react';
import PropTypes from 'prop-types';
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
              <HeadingThree color={createColor(swatch)}>{title}</HeadingThree>
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

ServicesTile.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  swatch: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  blurb: PropTypes.string.isRequired,
};

export default ServicesTile;
