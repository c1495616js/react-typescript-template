/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Figma } from '@/data';
import StoryLayout from '@/components/layout/stories/StoryLayout';
import Typography, { TypographyProps } from './Typography';

const meta: Meta = {
  title: 'Base/Typography',
  component: Typography,
  parameters: {
    controls: { expanded: true },
    design: { type: 'figma', url: Figma.Typography },
  },
};

export default meta;

interface Props extends TypographyProps {
  darkMode: boolean;
}

const TypographyHeadings: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Typography {...args} variant="h1">
      Display h1
    </Typography>

    <Typography {...args} variant="h2">
      Display h2
    </Typography>

    <Typography {...args} variant="h3">
      Display h3
    </Typography>

    <Typography {...args} variant="h4">
      Display h4
    </Typography>

    <Typography {...args} variant="h5">
      Display h5
    </Typography>

    <Typography {...args} variant="h6">
      Display h6
    </Typography>
  </StoryLayout>
);

export const Heading = TypographyHeadings.bind({});

Heading.args = {
  darkMode: true,
  className: '',
  customWeight: 'normal',
};

Heading.parameters = {
  controls: { exclude: ['variant', 'customColor', 'className'] },
};

/** Text */
const TypographyText: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Typography {...args} variant="xl">
      Text xl
    </Typography>
  </StoryLayout>
);

export const Text = TypographyText.bind({});

Text.args = {
  darkMode: true,
  customWeight: 'normal',
  className: '',
};

Text.parameters = {
  controls: { exclude: ['variant', 'customColor', 'className'] },
};

/** Dynamic */
const TypographyDynamic: Story<Props> = (args) => {
  const isHeading = args.variant.startsWith('h');
  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args} variant="xl">
        {isHeading ? 'Display' : 'Text'} {args.variant} <br /> Weight:{' '}
        {args.customWeight}
      </Typography>
    </StoryLayout>
  );
};

export const Dynamic = TypographyDynamic.bind({});

Dynamic.args = {
  variant: 'h1',
  customColor: '',
  customWeight: 'normal',
  darkMode: true,
  className: '',
};
