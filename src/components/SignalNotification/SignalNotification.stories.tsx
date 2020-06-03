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
import { SignalNotification } from './SignalNotification';

storiesOf('Components/SignalNotification', module)
  .addParameters({ component: SignalNotification })
  .addDecorator(
    hostDecorator({
      width: 500
    })
  )
  .add('Text', () => (
    <SignalNotification icon="warning" text="Activity automatically interrupted" />
  ))
  .add('Long text', () => (
    <SignalNotification
      icon="warning"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet ornare est. Fusce eget urna imperdiet, fringilla leo vel, euismod augue."
    />
  ));
