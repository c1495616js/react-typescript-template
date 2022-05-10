/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Story, Meta } from '@storybook/react';

import Alert, { AlertProps } from './Alert';

export default {
  title: 'Base/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'This is a neutral alert.',
  variant: 'neutral',
  onClose: () => {},
};

export const WithoutClose = Template.bind({});
WithoutClose.args = {
  variant: 'success',
  children: "This alert doesn't have a close button.",
};
