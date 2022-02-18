/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { FiHelpCircle, FiMail } from 'react-icons/fi';
import StoryLayout from '@/components/layout/stories/StoryLayout';

import { Figma } from '@/data';
import TextInput, { TextInputProps } from './TextInput';

const meta: Meta = {
  title: 'Base/TextInput',
  parameters: {
    controls: { expanded: true },
    design: { type: 'figma', url: Figma.TextInput },
  },
};

export default meta;

interface Props extends TextInputProps {
  darkMode: boolean;
}

const StoryTextInput: Story<Props> = (args) => {
  const [text1, setText1] = React.useState<string>(args.value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText1(e.target.value);
  };
  return (
    <StoryLayout {...args} className="flex space-x-8">
      <div>
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label="Email"
          placeholder="test@gmail.com"
          helperText="This is a hint text to help the user"
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label="Email"
          placeholder="test@gmail.com"
          error="This is an error message"
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
      </div>

      <div>
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          helperText="This is a hint tet to help the user"
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          error="This is an error message"
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryTextInput.bind({});

Default.args = {
  darkMode: false,
  disabled: false,
};
