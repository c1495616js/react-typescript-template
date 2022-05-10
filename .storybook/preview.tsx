import React from 'react';
import { useDarkMode as useStoryDarkMode } from 'storybook-dark-mode';

import '../src/styles/tailwind.css';
import Wrapper from '../src/components/base/wrapper/Wrapper';

export const decorators = [
  (Story) => {
    const mode = useStoryDarkMode();

    return (
      <Wrapper usePreferences dark={mode}>
        <Story />
      </Wrapper>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
