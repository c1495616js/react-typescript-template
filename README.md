# React-Typescript-Template

## Description

- custom `webpack`, no more blackbox.
- custom `eslint-plugin-jerry`
- path alias

  | alias      | real path                  |
  | ---------- | -------------------------- |
  | @          | <rootDir>/src/             |
  | test-utils | <rootDir>/utils/test-utils |

- Support `tailwindcss` with `jit` mode

## Demo

- [Storybook](https://c1495616js.github.io/react-typescript-template/)

#### Features:

- ⚛️ React 17
- ⛑️ Type safety via TypeScript
- 🔐 Private, public, and shared routes
- 💄 Write SCSS & future CSS with PostCSS + preset-env
- 🎯 Browserslist for specific browser support
- 🖊 Add SVGs, images, and custom fonts
- 🌎 Path aliasing for streamlined imports
- 🌈 Prettier for consistent code style
- 👀 Lint your code with ESLint
- 🐺 Husky + lint-staged for code quality assurance
- 🧪 Jest + React Testing Library for tests

#### Developers:

- [Jerry Wang](https://github.com/c1495616js)

## 🏃 Getting Started

Run the frontend via either option below, then visit the client at `http://localhost:8080`

**_NPM:_**

```
cp .env.example .env // add any env variables here
npm install
npm run start
```

**_NPM:_**

| Command             | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| npm run build       | Builds the client                                             |
| npm run serve       | Serves the client                                             |
| npm run build:serve | Builds and Serves the client                                  |
| npm run start       | Runs the client with hot reloading on $PORT &#124;&#124; 8080 |
| npm run test        | Runs the suite of Jest tests                                  |
| npm run test:watch  | Runs and Watches the suite of Jest tests                      |
| npm run lint        | Runs Prettier, ESLint, and StyleLint formatters               |

## Design System

- colors:
  Making the change in the `tailwind.config.js`
  https://daisyui.com/core/colors

- icon:
  https://heroicons.com/

## Packages

- https://github.com/epranka/react-combine-providers

## Gotcha

### Storybook

- webpack 5 has some issue when simply using `npx sb init`.
  Refering to this [article](https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324)

```
npm i -D @storybook/builder-webpack5@latest @storybook/manager-webpack5@latest

// under main.js
module.exports = {
  core: {
    builder: "webpack5",
  },
};
```

- Deploy via GA

https://github.com/storybookjs/storybook-deployer
