# Industrial UI

## Simple, modular UI Components for Shop Floor Applications

Industrial UI is a React toolkit built by [Actyx](https://www.actyx.com), a German tech company specializing in [distributed edge computing for factories](https://www.actyx.com/os/). The toolkit features over 45 components and is mostly meant for building Shop Floor Applications that run in modern browsers on Rugged Industrial Tablets.

Industrial UI provides buttons, tabs, cards, navigation, and many other components, all of which have designed and tested to maximize operators' user experience and productivity in industrial environments. The project is "battle-tested" and running in production for Actyx's customers in seven countries.

Industrial UI is written entirely in TypeScript with predictable static types, making it easy to pick up and understand.

## Installation

Industrial UI is available as an [npm package](https://www.npmjs.com/package/@actyx/industrial-ui).

```shell
npm install @actyx/industrial-ui
```

## Documentation

You can access the documentation and related examples by:

```sh
## clone repository
git clone https://github.com/Actyx/industrial-ui.git
## navigate to project folder
cd industrial-ui
## use the correct version of nodejs (optional)
nvm use
## install dependencies
npm i
## run StoryBook
npm run storybook
```

A website with documentation will be visible at [http://localhost:6006/](http://localhost:6006/)

On the left side of the screen, you can find all components, click each story on the left to see the component on the "Canvas" tab.

By clicking on the "Docs" tab you can access description, code samples and properties details.

## Developer tools

| Script | Description  |
|---|---|
| `npm run clean` | Clean lib and coverage folders |
| `npm run tsc` | Run TypeScript check |
| `npm run tsc:watch` | Run TypeScript check watch mode |
| `npm run build` | Build project |
| `npm run build:watch` | Build project watch mode |
| `npm run build:prod` | Perform all checks and build project |
| `npm run lint` | Check for lint issues |
| `npm run lint:fix` | Check and automatically fix lint issues |
| `npm run storybook` | Run StoryBook |
| `npm run storybook:build` | Build StoryBook |
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
