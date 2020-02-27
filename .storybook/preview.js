require('loki/configure-react')
/**
 * ES6 imports are not used because of sotryshots tests and jest not being able to load them.
 * It might be just a case of not good enough jest configuration.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { addParameters } = require('@storybook/react')
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { create } = require('@storybook/theming/create')

addParameters({
  options: {
    // showRoots: true,
    theme: create({
      base: 'light',
      brandTitle: 'Actyx',
      brandUrl: 'https://www.actyx.com',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
  },
})
