import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Figma } from '@/data';
import StoryLayout from '@/components/layout/stories/StoryLayout';
import Typography, { TypographyProps } from './Typography';

const meta: Meta = {
  title: 'Typography',
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
  </StoryLayout>
);

export const Heading = TypographyHeadings.bind({});

Heading.args = {
  darkMode: false,
  className: '',
  customWeight: 'normal',
};

Heading.parameters = {
  controls: { exclude: ['variant', 'customColor', 'className'] },
};
