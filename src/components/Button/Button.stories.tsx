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
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Button } from './Button';

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(hostDecorator())
  .add('Flat transparent text', () => (
    <Button variant="flat" color="transparent" text="Button" onClick={action('onClick')} />
  ))
  .add('Flat transparent icon text', () => (
    <Button
      variant="flat"
      color="transparent"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('Flat transparent icon', () => (
    <Button variant="flat" color="transparent" icon="assignment" onClick={action('onClick')} />
  ))
  .add('Raised primary text', () => (
    <Button variant="raised" color="primary" text="Button" onClick={action('onClick')} />
  ))
  .add('Raised primary icon text', () => (
    <Button
      variant="raised"
      color="primary"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('Raised green icon text', () => (
    <Button
      variant="raised"
      color="green"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('Raised orange icon text', () => (
    <Button
      variant="raised"
      color="orange"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('Raised yellow icon text', () => (
    <Button
      variant="raised"
      color="yellow"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('Raised red icon text', () => (
    <Button
      variant="raised"
      color="red"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('Raised grey icon text', () => (
    <Button
      variant="raised"
      color="grey"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('Raised neutral short text', () => (
    <Button variant="raised" color="neutral" text="+1" onClick={action('onClick')} />
  ))
  .add('Disabled', () => (
    <Button
      variant="raised"
      color="red"
      icon="assignment"
      text="Button"
      disabled
      onClick={action('onClick')}
    />
  ))
  .add('Full width', () => (
    <div style={{ width: 400 }}>
      <Button
        variant="raised"
        color="primary"
        icon="assignment"
        text="Button"
        fullWidth
        onClick={action('onClick')}
      />
    </div>
  ))
  .add('Full width centered', () => (
    <div style={{ width: 400 }}>
      <Button
        centered
        variant="raised"
        color="primary"
        icon="assignment"
        text="Button"
        fullWidth
        onClick={action('onClick')}
      />
    </div>
  ))
  .add('Raised primary icon', () => (
    <Button variant="raised" color="primary" icon="assignment" onClick={action('onClick')} />
  ))
  .add('Raised primary icon long text', () => (
    <Button
      variant="raised"
      color="primary"
      icon="assignment"
      text="Button with long tex"
      onClick={action('onClick')}
    />
  ))

  .add('Raised primary no wrap', () => (
    <div style={{ width: 100 }}>
      <Button
        variant="raised"
        color="primary"
        icon="assignment"
        text="Button with long tex"
        noWrap
        onClick={action('onClick')}
      />
    </div>
  ))
  .add('Knobs', () => {
    const colorKnob = object('Props', {
      variant: 'flat' as 'flat',
      color: 'grey' as 'grey',
      icon: 'person',
      text: 'Add User',
      disabled: false,
      fullWith: false
    });
    return <Button {...colorKnob} onClick={action('onClick')} />;
  });
