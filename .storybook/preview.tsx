import '../src/styles/tailwind.css';
import Wrapper from '../src/components/base/wrapper/Wrapper';

export const decorators = [
  (Story) => (
    <div>
      <Wrapper>
        <div className="story-demo">
          <Story />
        </div>
      </Wrapper>
    </div>
  ),
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
