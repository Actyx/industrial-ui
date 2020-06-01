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
import { GaugeProgress } from './GaugeProgress';

storiesOf('Components/GaugeProgress', module)
  .addParameters({ component: GaugeProgress })
  .addDecorator(hostDecorator({}))
  .add('Value 50%', () => <GaugeProgress color="green" value={50} />)
  .add('Value 75%', () => <GaugeProgress color="green" value={75} />)
  .add('Value 100%', () => <GaugeProgress color="green" value={100} />)
  .add('Value 150%', () => <GaugeProgress color="green" value={150} />)
  .add('Color blue', () => <GaugeProgress color="blue" value={60} />)
  .add('Color green', () => <GaugeProgress color="green" value={60} />)
  .add('Butt', () => <GaugeProgress color="green" lineCap="butt" value={60} />)
  .add('Round', () => <GaugeProgress color="green" lineCap="round" value={60} />)
  .add('Resize', () => (
    <div style={{ width: 500, height: 500 }}>
      <GaugeProgress color="green" lineCap="round" width="100%" height="100%" value={60} />
    </div>
  ))
  .add('Dynamic', () => {
    const Statefull = () => {
      const [value, setValue] = React.useState<number>(50);
      return (
        <div>
          <GaugeProgress color="green" value={value} />
          <input
            type="range"
            style={{ marginLeft: 20 }}
            value={value}
            onChange={x => setValue(x.target.valueAsNumber)}
          />
        </div>
      );
    };
    return <Statefull />;
  });
