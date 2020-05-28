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
import { Input } from './Input';

storiesOf('Components/Input', module)
  .addDecorator(hostDecorator())
  .add('Type number', () => <Input type="number" />)
  .add('Type text', () => <Input type="text" />)
  .add('value', () => <Input type="text" value="Text" onChange={action('onChange')} />)
  .add('maxLength', () => <Input type="text" maxLength={3} />)
  .add('readOnly', () => <Input type="text" value="Read only" readOnly />)
  .add('placeholder', () => <Input type="text" placeholder="Placeholder" />)
  .add('disabled', () => <Input type="text" value="Text" disabled />)
  .add('blurOnEnter', () => <Input type="text" blurOnEnter />)
  .add('error', () => <Input type="text" error />)
  .add('fullWidth', () => <Input type="text" fullWidth />)
  .add('autoFocus', () => <Input type="text" autoFocus />)
  .add('onClick', () => <Input type="text" onClick={action('onClick')} />)
  .add('onFocus', () => <Input type="text" onFocus={action('onFocus')} />)
  .add('onBlur', () => <Input type="text" onBlur={action('onBlur')} />)
  .add('onChange', () => <Input type="text" onChange={action('onChange')} />)
  .add('onKeyDOwn', () => <Input type="text" onKeyDown={action('onKeyDown')} />);
