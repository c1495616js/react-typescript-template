import React from 'react';
import { Meta, Story } from '@storybook/react';

import StoryLayout from '@/components/layout/stories/StoryLayout';

import { Figma, options1, options2, options3 } from '@/data';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const meta: Meta = {
  title: 'Base/ButtonGroup',
  parameters: {
    controls: { expanded: true },
    design: { type: 'figma', url: Figma.ButtonGroup },
  },
};

export default meta;

interface Props extends ButtonGroupProps<string> {
  darkMode: boolean;
}

const StoryButtonGroups: Story<Props> = (args) => {
  const [activeItem1, setActiveItem1] = React.useState<string>(
    options1[1].value
  );
  const [activeItem2, setActiveItem2] = React.useState<string>(
    options2[1].value
  );

  type ViewOption = 'list' | 'grid';

  const [viewOption, setViewOption] = React.useState<ViewOption>('list');

  return (
    <StoryLayout {...args} className="flex flex-col gap-2">
      <div>
        <ButtonGroup
          activeOption={activeItem1}
          setActiveOption={setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup
          activeOption={activeItem2}
          setActiveOption={setActiveItem2}
          options={options2}
        />
      </div>
      <div>
        <ButtonGroup
          activeOption={viewOption}
          setActiveOption={setViewOption}
          options={options3}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroups.bind({});

Default.args = {
  darkMode: false,
};
