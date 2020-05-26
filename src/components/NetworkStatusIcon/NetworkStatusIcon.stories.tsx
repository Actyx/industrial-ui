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
import * as React from 'react';
import { NetworkStatusIcon } from './NetworkStatusIcon';
import { hostDecorator } from '../../utils';
import { grey, red } from '../../colors';

storiesOf('Components/NetworkStatusIcon', module)
  .addDecorator(
    hostDecorator({
      backgroundColor: grey[400],
      width: '100%',
      height: '100%'
    })
  )
  .add('Light connected', () => (
    <NetworkStatusIcon networkStatus="connected" variant="light" onSelect={action('onSelect')} />
  ))
  .add('Light partially connected', () => (
    <NetworkStatusIcon
      networkStatus="partiallyConnected"
      variant="light"
      onSelect={action('onSelect')}
    />
  ))
  .add('Light disconnected', () => (
    <NetworkStatusIcon networkStatus="disconnected" variant="light" onSelect={action('onSelect')} />
  ))
  .add('Dark connected', () => (
    <NetworkStatusIcon networkStatus="connected" variant="dark" onSelect={action('onSelect')} />
  ))
  .add('Dark partially connected', () => (
    <NetworkStatusIcon
      networkStatus="partiallyConnected"
      variant="dark"
      onSelect={action('onSelect')}
    />
  ))
  .add('Dark disconnected', () => (
    <NetworkStatusIcon networkStatus="disconnected" variant="dark" onSelect={action('onSelect')} />
  ))
  .add('Color red', () => (
    <NetworkStatusIcon
      networkStatus="disconnected"
      variant="dark"
      color={red[500]}
      onSelect={action('onSelect')}
    />
  ));
