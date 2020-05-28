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
import { StatusCounters, StatusCountersCounter } from './StatusCounters';
import { StatusCounter } from './StatusCounter';

const ready: StatusCountersCounter = { variant: 'ready', counter: 2 };
const unknown: StatusCountersCounter = { variant: 'unknown', counter: 4 };
const requested: StatusCountersCounter = { variant: 'requested', counter: 19 };
const ex1 = [ready];
const ex2 = [unknown, requested];
const ex3 = [ready, unknown, requested];

storiesOf('Components/StatusCounters', module)
  .addDecorator(hostDecorator())
  .add('One counter', () => <StatusCounters counters={ex1} />)
  .add('Two counters', () => <StatusCounters counters={ex2} />)
  .add('Tree counters', () => <StatusCounters counters={ex3} />)
  .add('Part ready', () => <StatusCounter counter={1} variant="ready" />)
  .add('Part requested', () => <StatusCounter counter={22} variant="requested" />)
  .add('Part unknown', () => <StatusCounter counter={764} variant="unknown" />)
  .add('Part long', () => <StatusCounter counter={43993487348734} variant="ready" />);
