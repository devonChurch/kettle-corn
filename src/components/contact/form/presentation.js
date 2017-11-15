import React from 'react';
import { Spacer, Sizer, Flexer, Test } from '../../scaffold';
import { Text } from '../../headings';
import { Form, FormInput, FormTextArea } from '../../form';
import { ButtonSubmit } from '../../buttons';

const Presentation = ({
  handleSubmit,
  handleChange,
  values,
  isSubmitDisabled,
  statusMessage,
  invalidMessages,
}) => (
  <Test hook="contact-form-wrapper">
    <Form handleSubmit={handleSubmit}>
      <FormInput
        label="Name"
        type="text"
        value={values.name}
        handleChange={handleChange('name')}
        invalidMessage={invalidMessages.name}
      />
      <FormInput
        label="Email"
        type="text"
        value={values.email}
        handleChange={handleChange('email')}
        invalidMessage={invalidMessages.email}
      />
      <FormTextArea
        label="Message"
        value={values.message}
        handleChange={handleChange('message')}
        invalidMessage={invalidMessages.message}
      />

      <ButtonSubmit handleClick={handleSubmit} isDisabled={isSubmitDisabled}>
        Send question
      </ButtonSubmit>

      {Boolean(
        statusMessage.color && statusMessage.text && statusMessage.Icon && statusMessage.test,
      ) && (
        <Spacer padding={['medium', 0, 0]}>
          <Flexer>
            {({ Wrapper, Item }) => (
              <Wrapper align="center">
                <Item>
                  <Sizer width="3vw" minWidth="20px" maxWidth="30px">
                    <statusMessage.Icon color={statusMessage.color} />
                  </Sizer>
                </Item>
                <Item>
                  <Spacer padding={[0, 0, 0, 'small']}>
                    <Test hook={statusMessage.test}>
                      <Text color={statusMessage.color}>{statusMessage.text}</Text>
                    </Test>
                  </Spacer>
                </Item>
              </Wrapper>
            )}
          </Flexer>
        </Spacer>
      )}
    </Form>
  </Test>
);

export default Presentation;
