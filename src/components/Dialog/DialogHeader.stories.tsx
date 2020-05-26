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
import { DialogHeader } from './DialogHeader';

export const title = 'Title dialog';

storiesOf('Components/Dialog/DialogHeader', module)
  .addDecorator(hostDecorator({ width: '100%' }))
  .add('Base', () => <DialogHeader text={title} />)
  .add('rightComponent', () => <DialogHeader text={title} rightComponent={'content right'} />);
