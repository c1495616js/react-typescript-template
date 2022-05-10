import React from 'react';

import { Story, Meta } from '@storybook/react';

import Backdrop, { BackdropProps } from './Backdrop';

export default {
  title: 'Base/Modal/Backdrop',
  component: Backdrop,
} as Meta;

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />;

export const Basic = Template.bind({});
