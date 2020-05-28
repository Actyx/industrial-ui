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
import { hostDecorator, range } from '../../utils';
import * as React from 'react';
import { HorizontallyScrollableList } from './HorizontallyScrollableList';

storiesOf('Components/HorizontallyScrollableList', module)
  .addParameters({ component: HorizontallyScrollableList })
  .addDecorator(
    hostDecorator({
      width: 500,
      height: 240
    })
  )
  .add('Base', () => (
    <HorizontallyScrollableList
      rows={3}
      onItemSelect={action('onItemSelect')}
      items={range(1, 8).map(x => ({ id: `${x}`, name: `Item ${x}` }))}
    />
  ))
  .add('Long text', () => (
    <HorizontallyScrollableList
      rows={2}
      onItemSelect={action('onItemSelect')}
      items={range(1, 4).map(x => ({
        id: `${x}`,
        name: ` ${x} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      }))}
    />
  ));
