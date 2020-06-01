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
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { IconTextNotification } from './IconTextNotification';
import { red, green, blue } from '../../colors';

storiesOf('Components/IconTextNotification', module)
  .addParameters({ component: IconTextNotification })
  .addDecorator(hostDecorator({}))
  .add('Warning', () => (
    <IconTextNotification icon="warning" text="Interrupted" color={red.A700} counter={3} />
  ))
  .add('Warning counter', () => (
    <IconTextNotification icon="warning" text="Interrupted" color={red.A700} />
  ))
  .add('Generic counter', () => (
    <IconTextNotification icon="info" text="Generic text" color={blue[700]} counter={17} />
  ))
  .add('Small size', () => (
    <IconTextNotification
      icon="info"
      text="Generic text"
      color={green[700]}
      counter={17}
      smallSize
    />
  ));
