import React from 'react';

import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from './Card';
import CardBody from './CardBody';

export default {
  title: 'Base/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

// TODO: Add composed examples with CardBody
export const Basic = Template.bind({});
Basic.args = {
  children: 'Hello',
};

export const Colored = Template.bind({});
Colored.args = {
  children: 'Hello',
  colored: true,
  className: 'bg-red-200',
};

export const WithBody = Template.bind({});
WithBody.args = {
  children: (
    <CardBody>
      <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
        Revenue
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
        commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
        cum numquam, sed amet ratione! Ratione, nihil dolorum.
      </p>
    </CardBody>
  ),
  colored: false,
};
