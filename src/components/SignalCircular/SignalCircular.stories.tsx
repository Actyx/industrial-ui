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
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { SignalCircular } from './SignalCircular';

storiesOf('Components/SignalCircular', module)
  .addParameters({ component: SignalCircular })
  .addDecorator(hostDecorator())
  .add('Size xs', () => <SignalCircular color="green" size="xs" />)
  .add('Size sm', () => <SignalCircular color="green" size="sm" />)
  .add('Size md', () => <SignalCircular color="green" size="md" />)
  .add('Color red', () => <SignalCircular color="red" size="md" />)
  .add('Color orange', () => <SignalCircular color="orange" size="md" />)
  .add('Color yellow', () => <SignalCircular color="yellow" size="md" />)
  .add('Color green', () => <SignalCircular color="green" size="md" />)
  .add('Color lightGrey', () => <SignalCircular color="lightGrey" size="md" />)
  .add('Color darkGrey', () => <SignalCircular color="darkGrey" size="md" />);
