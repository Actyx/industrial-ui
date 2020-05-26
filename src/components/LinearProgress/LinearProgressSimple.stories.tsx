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
import { LinearProgressSimple } from './LinearProgressSimple';

storiesOf('Components/LinearProgressSimple', module)
  .addDecorator(hostDecorator({}))
  .add('green', () => <LinearProgressSimple color="green" value={50} />)
  .add('grey', () => <LinearProgressSimple color="grey" value={50} />)
  .add('orange', () => <LinearProgressSimple color="orange" value={50} />)
  .add('red', () => <LinearProgressSimple color="red" value={50} />)
  .add('white', () => <LinearProgressSimple color="white" value={50} border />)
  .add('yellow', () => <LinearProgressSimple color="yellow" value={50} />)
  .add('brown', () => <LinearProgressSimple color="brown" value={50} />)
  .add('disabled', () => <LinearProgressSimple color="green" value={50} disabled />);
