import React from 'react';
import PropTypes from 'prop-types';
import { createColor } from '../../../styles';
import Markdown from '../../markdown';
import { Spacer, Sizer, Flexer } from '../../scaffold';
import { HeadingTwo, Text } from '../../headings';
import { ButtonTertiary } from '../../buttons';

const ServicesArticle = ({ title, id, swatch, Icon, content }) => {
  const paragraphs = content.split('\n').filter(paragraph => paragraph);
  const introductionSize = 2;
  const isIntroduction = paragraphs.length > introductionSize;
  const introduction = isIntroduction && paragraphs.slice(0, introductionSize).join('\n\n');
  const bodyCopy = isIntroduction ? paragraphs.slice(introductionSize).join('\n\n') : content;

  return (
    <Spacer>
      <Flexer>
        {({ Wrapper, Item }) => (
          <Wrapper wrap="wrap" align="center">
            <Item>
              <Spacer margin={['-15px', 0, 0, '-20px']} padding={[0, 'medium', 0, 0]}>
                <Sizer width="100px">
                  <Icon />
                </Sizer>
              </Spacer>
            </Item>
            <Item grow="1">
              <Spacer margin={['-medium', 0]}>
                <HeadingTwo color={[swatch]} isSpaceless id={id}>
                  {title}
                </HeadingTwo>
              </Spacer>
            </Item>
          </Wrapper>
        )}
      </Flexer>

      <Spacer padding={['large', 0, 0]}>
        {introduction && (
          <Text display="block" weight={900} size="16px">
            <Markdown swatch={swatch}>{introduction}</Markdown>
          </Text>
        )}

        <Text display="block" size="14px">
          <Markdown swatch={swatch}>{bodyCopy}</Markdown>
        </Text>
      </Spacer>
    </Spacer>
  );
};

ServicesArticle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  swatch: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default ServicesArticle;
