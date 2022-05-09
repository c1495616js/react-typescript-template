/* eslint-disable global-require */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|secondary|error|gray)-?(focus|content|100|200|300|400|500|600|700)/,
    },
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-breakpoints-inspector'),
  ],
};
