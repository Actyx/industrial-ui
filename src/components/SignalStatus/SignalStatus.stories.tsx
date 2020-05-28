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
import { SignalStatus } from './SignalStatus';

storiesOf('Components/SignalStatus', module)
  .addDecorator(hostDecorator({}))
  .add('Running', () => <SignalStatus status="running" />)
  .add('Interrupted', () => <SignalStatus status="interrupted" />)
  .add('Idle', () => <SignalStatus status="idle" />)
  .add('Completed', () => <SignalStatus status="finished" />)
  .add('Running with text', () => <SignalStatus status="running" text="Some text" />)
  .add('Interrupted with text', () => <SignalStatus status="interrupted" text="Power failure" />);
