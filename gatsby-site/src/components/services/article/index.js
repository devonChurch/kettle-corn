import React from 'react';
import {createColor} from '../../../styles';
import Markdown from '../../markdown';
import {Spacer, Sizer, Flexer} from '../../scaffold';
import {HeadingTwo, Text} from '../../headings';
import {ButtonTertiary} from '../../buttons';

const ServicesArticle = ({title, id, color, Icon, content}) => {

  const paragraphs = content.split('\n').filter((paragraph) => paragraph);
  const introductionSize = 2;
  const isIntroduction = paragraphs.length > introductionSize;
  const introduction = isIntroduction && paragraphs.slice(0, introductionSize).join('\n\n');
  const bodyCopy = isIntroduction ? paragraphs.slice(introductionSize).join('\n\n') : content;

  return (
    <Spacer>

      <Flexer>
        {({Wrapper, Item}) => (
          <Wrapper wrap="wrap" align="center">
            <Item>
              <Sizer height="70px">
                <Spacer margin={['-15px', 0, 0, '-20px']} padding={[0, 'medium', 0, 0]}>
                  <Sizer width="100px">
                    <Icon />
                  </Sizer>
                </Spacer>
              </Sizer>
            </Item>
            <Item grow="1">
              <Spacer margin={['-medium', 0]}>
                <HeadingTwo color={createColor(color)} isSpaceless id={id}>{title}</HeadingTwo>
              </Spacer>
            </Item>
          </Wrapper>
        )}
      </Flexer>

      <Spacer padding={['large', 0, 0]}>
          {introduction && <Text isBlock weight="900" size="16px">
            <Markdown color={color}>{introduction}</Markdown>
          </Text>}

          <Text isBlock size="14px">
            <Markdown color={color}>{bodyCopy}</Markdown>
          </Text>

      </Spacer>

    </Spacer>
  );

};

export default ServicesArticle;
