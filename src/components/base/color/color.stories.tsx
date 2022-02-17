import React from 'react';
import { Meta, Story } from '@storybook/react';

import StoryLayout from '@/components/layout/stories/StoryLayout';
import ColorBox from './ColorBox';

import { Figma, colors } from '@/data';

const meta: Meta = {
  title: 'Base/Colors',
  parameters: {
    controls: { expanded: true },
    design: { type: 'figma', url: Figma.Colors },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

const StoryColors: Story<Props> = (args) => (
  <StoryLayout
    {...args}
    className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11"
  >
    {colors.map((color) => (
      <ColorBox key={color.bgClass} color={color} />
    ))}
  </StoryLayout>
);

export const Default = StoryColors.bind({});

Default.args = {
  darkMode: false,
};
