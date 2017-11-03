import React from 'react';
import Link from 'gatsby-link';
import Hero from '../../hero';
import Grid from '../../grid';
import { Spacer, Flexer, Sizer } from '../../scaffold';
import { ButtonQuaternary } from '../../buttons';
import { LogoNoText } from '../../logo';
import { HeadingTwo, Text } from '../../headings';
import ContactOptions from '../../contact/options';
import { createColor } from '../../../styles';

const FooterStandard = () => {
  return (
    <Hero
      background={['blue']}
      arrow={['left', 'top']}
      element="footer"
      padding={['largest', 0, 'large']}
    >
      <HeadingTwo id="talk-to-us" color={['misc', 'white']}>
        We love working with <strong>local businesses</strong>
      </HeadingTwo>

      <Spacer margin={['-medium', 0, 0]}>
        <Text display="block" color={['blue', 'darkest']}>
          Contact us to talk about your growing your digital presence today.
        </Text>
      </Spacer>

      <Spacer margin={['large', 0, 0]}>
        <ContactOptions swatch={['misc', 'white']} />
      </Spacer>
    </Hero>
  );
};

export default FooterStandard;
