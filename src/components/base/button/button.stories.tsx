/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Base/Button',
  component: Button,
} as Meta;

export const Playground: Story<ButtonProps> = (props) => (
  <Button {...props}>{props?.variant}</Button>
);

Playground.args = {
  variant: 'contained',
  color: 'primary',
  buttonSize: 'md',
  textCase: 'uppercase',
  disabled: false,
  active: false,
  loading: false,
};
