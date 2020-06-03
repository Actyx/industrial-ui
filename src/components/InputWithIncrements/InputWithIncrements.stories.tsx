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
import { InputWithIncrements } from './InputWithIncrements';

storiesOf('Components/InputWithIncrements', module)
  .addParameters({ component: InputWithIncrements })
  .addDecorator(
    hostDecorator({
      width: 600
    })
  )
  .add('Base', () => (
    <InputWithIncrements
      incrementMin={1}
      incrementMed={5}
      incrementMax={10}
      onChange={action('onChange')}
    />
  ))
  .add('Default value', () => (
    <InputWithIncrements
      incrementMin={1}
      incrementMed={5}
      incrementMax={10}
      defaultValue={20}
      onChange={action('onChange')}
    />
  ))
  .add('Calculation delay', () => (
    <InputWithIncrements
      incrementMin={1}
      incrementMed={10}
      incrementMax={100}
      calculationDelay={4000}
      onChange={action('onChange')}
    />
  ));
