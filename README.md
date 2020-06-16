<img width="130px" src="https://raw.githubusercontent.com/Actyx/industrial-ui/master/assets/industrial-ui-logo.svg?token=AEDGFNTMXLHX2MXQ25JH2A264DRHU">

# Industrial UI

🚀 Demo and docs: [https://actyx.github.io/industrial-ui/index.html](https://actyx.github.io/industrial-ui/index.html?path=/docs/components-batteryicon--charged-100)

## Simple, modular UI Components for Shop Floor Applications

Industrial UI is a React toolkit built by [Actyx](https://www.actyx.com), a German tech company specializing in [distributed edge computing for factories](https://www.actyx.com/products/os/). The toolkit features over 45 components and is mostly meant for building Shop Floor Applications that run in modern browsers on Rugged Industrial Tablets.

Industrial UI provides buttons, tabs, cards, navigation, and many other components, all of which have designed and tested to maximize operators' user experience and productivity in industrial environments. The project is "battle-tested" and running in production for Actyx's customers in seven countries.

Industrial UI is written entirely in TypeScript with predictable static types, making it easy to pick up and understand.

## 📦 Installation

Industrial UI is available as an [npm package](https://www.npmjs.com/package/@actyx/industrial-ui).

```shell
npm install @actyx/industrial-ui
```

## 📖 Documentation

You can access the documentation and related examples by visiting:

[https://actyx.github.io/industrial-ui/index.html](https://actyx.github.io/industrial-ui/index.html)

by clicking on the "Docs" tab you can access description, code samples, and properties details for each component.

For off-line documentation please use following instructions:

```sh
## clone repository
git clone https://github.com/Actyx/industrial-ui.git
## navigate to project folder
cd industrial-ui
## use the correct version of nodejs
nvm use
## install dependencies
npm i
## run StoryBook
npm run storybook
```

A website with documentation will be visible at [http://localhost:6006/](http://localhost:6006/)

## Tutorials

- [How to set up a new project and import Industrial UI](./tutorials/how-to-set-up-project-and-import-industrial-ui.md)

## 🤓 Developer tools

| Script | Description  |
|---|---|
| `npm run clean` | Clean lib and coverage folders |
| `npm run check` | Perform all checks |
| `npm run tsc` | Run TypeScript check |
| `npm run tsc:watch` | Run TypeScript check watch mode |
| `npm run build` | Build project |
| `npm run build:watch` | Build project watch mode |
| `npm run build:prod` | Perform all checks and build project |
| `npm run lint` | Check for lint issues |
| `npm run lint:fix` | Check and automatically fix lint issues |
| `npm run storybook` | Run StoryBook |
| `npm run storybook:build` | Build StoryBook |
| `npm run storybook:build-local` | Run built StoryBook locally |
| `npm run storybook:build-deploy` | Deploy built StoryBook on GitHub Pages |
| `npm run test` | Run Jest tests |
| `npm run test:no-coverage` | Run Jest tests and exclude coverage report |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:visual` | Run visual regression testing |
| `npm run test:visual-approve` | Approve result from visual regression testing |
| `npm run license:add` | Append license information to every relevant files |
| `npm run license:check` | Check if license information is present on every relevant files |
| `npm run license:check-dep` | Check the licenses for project dependencies |
| `npm run license:check-dep` | Check the licenses for project dependencies and produce a summary |
| `npm run sloc` | Report total number of source lines of code |
