import React from 'react';
import { Meta, Story } from '@storybook/react';

import { FiStar } from 'react-icons/fi';

import Button, { ButtonProps } from './Button';

import { Figma } from '@/data';

export default {
  title: 'Base/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
    design: { type: 'figma', url: Figma.Button },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
  variant: 'primary',
  size: 'regular',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Icon',
  variant: 'primary',
  iconRight: FiStar,
  loading: true,
};
