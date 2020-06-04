# Tutorial

## 📦 How to setup a new project and import Industrial UI

In this mini-tutorial, you will learn how to set up a React project based on TypeScript and how to include Industrial UI.

You need to have [Node.js®](https://nodejs.org/en/download/) installed on your machine.

First of all make sure you install [Create React App](https://github.com/facebook/create-react-app#readme), which is an officially supported way to create single-page React applications.

We suggest it as it offers a modern build setup with no configuration, but you can otherwise use Industrial UI on any React TypeScript projects.

```shell
npm i -g create-react-app
```

In your folder of choice set up a new React project based on TypeScript:

```shell
npx create-react-app my-app --template typescript
```

Open the folder project and edit `src/App.tsx` such:

```typecript
import React from 'react';
import './App.css';
import { Typography, Button } from '@actyx/industrial-ui/lib/components'

function App() {
  const [text, setText] = React.useState('')

  return (
    <div>
      <Button
        variant="raised"
        color="primary"
        icon="announcement"
        text="Say hello world!"
        onClick={() => setText('Hello, World! 😎')}
      />
      <div>
        <Typography variant="giant">{text}</Typography>
      </div>
    </div>
  )
}

export default App;
```

Now run your project by using `npm start`, your hello world page is visible at [http://localhost:3000/](http://localhost:3000/)

## 📖 Details

At the top of the file we have imported Industrial UI components by using:

```typescript
import { Typography, Button } from '@actyx/industrial-ui/lib/components'
```

In the `App` component, we use React hook, which lets you use state without writing a class.

```typescript
 const [text, setText] = React.useState('')
```

Variable `text` will contain a string with our message, and function `setText()` will be used to change the value of `text`.

Add a Button component from Industrial UI, you can choose between different colors and style, please reference our [documentation](https://actyx.github.io/industrial-ui/index.html?path=/docs/components-button--flat-transparent-text).

```typescript
      <Button
        variant="raised"
        color="primary"
        icon="announcement"
        text="Say hello world!"
        onClick={() => setText('Hello, World! 😎')}
      />
```

The `onClick` property accept a function callback, which will set variable `text` via `setText()`.

Simply show the content of our variable `text` in a nice typography element.

```typescript
<Typography variant="giant">{text}</Typography>
```

And that is! You just learn how to include Industrial UI in a new project. 👏

For more information about Industrial UI API please refer to our [documentation](https://actyx.github.io/industrial-ui/index.htm).

Happy coding! 👨‍💻
