import React from 'react';
import Link from 'gatsby-link';
import FooterSimple from '../simple';
import Hero from '../../hero';
import Grid from '../../grid';
import { Spacer, Sizer, Content } from '../../scaffold';
import { ButtonQuaternary } from '../../buttons';
import { LogoNoText } from '../../logo';
import { HeadingTwo, Text } from '../../headings';
import ContactOptions from '../../contact/options';
import { createColor } from '../../../styles';

const FooterStandard = () => {
  return (
    <Spacer>
      <Content>
        <HeadingTwo color={['blue']}>
          <Text color={['gray', 'light']}>We love working with</Text>{' '}
          <Text weight={700}>local businesses</Text>
        </HeadingTwo>

        <Spacer margin={['-medium', 0, 0]}>
          <Text display="block" color={['blue', 'darkest']}>
            Contact us to talk about your growing your digital presence today.
          </Text>
        </Spacer>

        <Spacer margin={['large', 0, 'largest']}>
          <ContactOptions swatch={['blue']} />
        </Spacer>
      </Content>
      <FooterSimple />
    </Spacer>
  );
};

export default FooterStandard;
