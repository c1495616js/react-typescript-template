/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert, { AllertProps } from './Alert';

export default {
  title: 'Base/Alert',
  component: Alert,
} as Meta;

export const Playground: Story<AllertProps> = (props) => <Alert {...props} />;

Playground.args = {
  label: 'Alert',
  variant: 'none',
};
