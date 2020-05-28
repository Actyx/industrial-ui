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
import { FloatingActionButton } from './FloatingActionButton';

storiesOf('Components/FloatingActionButton', module)
  .addDecorator(hostDecorator())
  .add('Size sm', () => (
    <FloatingActionButton size="sm" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('Size md', () => (
    <FloatingActionButton size="md" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('Size xl', () => (
    <FloatingActionButton size="xl" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('Disabled', () => (
    <FloatingActionButton
      size="xl"
      icon="close"
      color="primary"
      onClick={action('onClick')}
      disabled
    />
  ))
  .add('Neutral', () => (
    <FloatingActionButton size="sm" icon="close" color="neutral" onClick={action('onClick')} />
  ))
  .add('Secondary', () => (
    <FloatingActionButton size="sm" icon="close" color="secondary" onClick={action('onClick')} />
  ));
