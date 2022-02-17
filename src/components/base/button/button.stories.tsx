import React from 'react';
import { Meta, Story } from '@storybook/react';

import { FiStar } from 'react-icons/fi';
import StoryLayout from '@/components/layout/stories/StoryLayout';
import Button, { ButtonProps } from './Button';

import { Figma } from '@/data';

const meta: Meta = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
    design: { type: 'figma', url: Figma.Button },
  },
};

export default meta;

interface Props extends ButtonProps {
  darkMode: boolean;
}

const StoryButton: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Button {...args}>Button</Button>

    <Button {...args} LeadingIcon={<FiStar />}>
      Button
    </Button>

    <Button {...args} TrailingIcon={<FiStar />}>
      Button
    </Button>

    <Button {...args} IconOnly={<FiStar />} />
  </StoryLayout>
);

export const Default = StoryButton.bind({});

Default.args = {
  variant: 'primary',
  size: 'md',
  darkMode: false,
  disabled: false,
  loading: false,
};

Default.parameters = {
  controls: { exclude: ['LeadingIcon', 'TrailingIcon', 'IconOnly'] },
};
