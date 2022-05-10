import React from 'react';

import { Story, Meta } from '@storybook/react';

import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Base/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'large',
  src: 'https://github.com/estevanmaito/windmill-react-ui/blob/master/src/stories/static/avatar-1.jpg?raw=true',
  alt: 'Profile image',
};
