/*
Copyright 2020 Actyx AG

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
