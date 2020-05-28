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
import { TextArea } from './TextArea';

const actionChange = action('onChange');

storiesOf('Components/TextArea', module)
  .addParameters({ component: TextArea })
  .addDecorator(hostDecorator())
  .add('Text', () => <TextArea />)
  .add('autoFocus', () => <TextArea autoFocus />)
  .add('fullWidth', () => <TextArea fullWidth />)
  .add('maxLength', () => <TextArea maxLength={3} />)
  .add('readOnly', () => <TextArea value="Read only" readOnly onChange={actionChange} />)
  .add('value', () => <TextArea value="Text" onChange={actionChange} />)
  .add('placeholder', () => <TextArea placeholder="Placeholder" />)
  .add('disabled', () => <TextArea value="Text" disabled />)
  .add('blurOnEnter', () => <TextArea blurOnEnter />)
  .add('error', () => <TextArea error />)
  .add('onFocus', () => <TextArea onFocus={action('onFocus')} />)
  .add('onBlur', () => <TextArea onBlur={action('onBlur')} />)
  .add('onChange', () => <TextArea onChange={action('onChange')} />);
