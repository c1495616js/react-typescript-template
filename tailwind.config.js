/* eslint-disable global-require */

const colors = {
  primary: 'var(--color-primary)',
  'primary-focus': 'var(--color-primary-focus)',
  'primary-content': 'var(--color-primary-content)',
  secondary: 'var(--color-secondary)',
  'secondary-focus': 'var(--color-secondary-focus)',
  'secondary-content': 'var(--color-secondary-content)',
  accent: 'var(--color-accent)',
  'accent-focus': 'var(--color-accent-focus)',
  'accent-content': 'var(--color-accent-content)',
  neutral: 'var(--color-neutral)',
  'neutral-focus': 'var(--color-neutral-focus)',
  'neutral-content': 'var(--color-neutral-content)',
  'base-100': 'var(--color-base-100)',
  'base-200': 'var(--color-base-200)',
  'base-300': 'var(--color-base-300)',
  'base-content': 'var(--color-base-content)',
  info: 'var(--color-info)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [], // once add color, sometimes need to add to here, in order not to be purged
  mode: 'jit',
  theme: {
    extend: {
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        regular: colors,
      },
    ],
  },
};
