import React from 'react';
import PropTypes from 'prop-types';
import { createColor } from '../../../styles';
import { Spacer, Sizer, Flexer } from '../../scaffold';
import { HeadingThree, Text } from '../../headings';
import { ButtonTertiary, Anchor } from '../../buttons';
import { IconContainer } from '../../icons';
import styles from './styles';

const { Swrapper, Stile, Sbutton } = styles;

const ServicesTile = ({ title, id, swatch, Icon, blurb }) => {
  const href = `/services#${id}`;

  return (
    <Swrapper>
      <Anchor href={href}>
        <Stile swatch={swatch}>
          <Spacer padding={[0, 0, 'medium']}>
            <IconContainer background={[swatch]}>
              <Icon />
            </IconContainer>
          </Spacer>
          <HeadingThree color={[swatch]}>{title}</HeadingThree>
          <Text color={[swatch, 'darkest']}>{blurb}</Text>
          <Sizer height={'large'} />
        </Stile>
      </Anchor>
      <Sbutton>
        <ButtonTertiary href={href} swatch={[swatch]}>
          Read more
        </ButtonTertiary>
      </Sbutton>
    </Swrapper>
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
