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
import { BatteryIcon } from './BatteryIcon';

storiesOf('Components/BatteryIcon', module)
  .addDecorator(
    hostDecorator({
      height: 100,
      backgroundColor: 'silver',
      display: 'flex',
      alignItems: 'center'
    })
  )
  .add('Charged 100%', () => <BatteryIcon level={100} />)
  .add('Charged 20%', () => <BatteryIcon level={20} />)
  .add('Charged 10%', () => <BatteryIcon level={10} />)
  .add('Charged 0%', () => <BatteryIcon level={0} />)
  .add('Charging 100%', () => <BatteryIcon level={100} charging />)
  .add('Charging 20%', () => <BatteryIcon level={20} charging />)
  .add('Charging 10%', () => <BatteryIcon level={10} charging />)
  .add('Charging 0%', () => <BatteryIcon level={0} charging />)
  .add('Dark 100%', () => <BatteryIcon level={100} variant="dark" />)
  .add('Dark 20%', () => <BatteryIcon level={20} variant="dark" />)
  .add('Dark 10%', () => <BatteryIcon level={10} variant="dark" />)
  .add('Dark charging 20%', () => <BatteryIcon level={20} charging variant="dark" />)
  .add('Dark charging 10%', () => <BatteryIcon level={10} charging variant="dark" />)
  .add('Dark charging 0%', () => <BatteryIcon level={0} charging variant="dark" />)
  .add('Counter 100%', () => <BatteryIcon level={100} counter />)
  .add('Counter 34%', () => <BatteryIcon level={33.99999999} counter />)
  .add('Counter 20%', () => <BatteryIcon level={20} counter />)
  .add('Counter 0%', () => <BatteryIcon level={0} counter />);
