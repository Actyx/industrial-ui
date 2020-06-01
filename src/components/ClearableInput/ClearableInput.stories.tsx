/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { ClearableInput } from './ClearableInput';

storiesOf('Components/ClearableInput', module)
  .addParameters({ component: ClearableInput })
  .addDecorator(hostDecorator())
  .add('No value', () => (
    <ClearableInput
      value=""
      onChange={action('onChange')}
      onClearRequested={action('onClearRequested')}
    />
  ))
  .add('Value', () => (
    <ClearableInput
      value="100"
      onChange={action('onChange')}
      onClearRequested={action('onClearRequested')}
    />
  ))
  .add('Long', () => (
    <ClearableInput
      value="100"
      long
      onChange={action('onChange')}
      onClearRequested={action('onClearRequested')}
    />
  ))
  .add('Interactable', () => {
    const Statefull = () => {
      const [val, setVal] = React.useState('');

      const props = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setVal(e.currentTarget.value),
        onClearRequested: () => setVal('')
      };

      return <ClearableInput value={val} {...props} />;
    };

    return <Statefull />;
  })
  .add('Empty value forSearch', () => (
    <ClearableInput
      value=""
      onChange={action('onChange')}
      onClearRequested={action('onClearRequested')}
      forSearch
    />
  ))
  .add('Interactable long forSearch', () => {
    const Statefull = () => {
      const [val, setVal] = React.useState('');

      const props = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setVal(e.currentTarget.value),
        onClearRequested: () => setVal('')
      };

      return <ClearableInput value={val} {...props} long forSearch />;
    };

    return <Statefull />;
  });
