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
import { Chevron, ChevronType } from './Chevron';

const Animate = ({ type }: { type: ChevronType }) => {
  const [down, setDown] = React.useState<boolean>(false);
  const [animation, setAnimation] = React.useState<boolean>(true);
  return (
    <div>
      <Chevron down={down} animation={animation} onSelect={() => setDown(!down)} type={type} />
      <div>
        <label htmlFor="enable-animation">Enable animation:</label>
        <input
          name="enable-animation"
          style={{ marginTop: 20, marginLeft: 10 }}
          type="checkbox"
          checked={animation}
          onChange={() => setAnimation(!animation)}
        />
      </div>
    </div>
  );
};

storiesOf('Components/Chevron', module)
  .addDecorator(hostDecorator())
  .add('Size sm', () => <Chevron size="sm" />)
  .add('Size md', () => <Chevron size="md" />)
  .add('Up-down animate', () => <Animate type="upDown" />)
  .add('Right-down animate', () => <Animate type="rightDown" />)
  .add('onSelect', () => <Chevron onSelect={action('onSelect')} />);
