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
import { red } from '../../colors';

const warningBaseProps = {
  icon: 'warning',
  text: 'Interrupted',
  color: red.A700
};

const genericBaseProps = {
  icon: 'info',
  text: 'Generic text',
  color: theme.palette.primary.main,
  counter: 17
};

storiesOf('Components/IconTextNotification', module)
  .addDecorator(hostDecorator({}))
  .add('Warning', () => <IconTextNotification {...warningBaseProps} counter={3} />)
  .add('Warning counter', () => <IconTextNotification {...warningBaseProps} />)
  .add('Generic counter', () => <IconTextNotification {...genericBaseProps} />)
  .add('Small size', () => <IconTextNotification {...genericBaseProps} smallSize />);
