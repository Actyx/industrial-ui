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
import { Typography } from '../Typography';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { SimpleToolbar } from './SimpleToolbar';
import { SimpleToolbarButton } from './SimpleToolbarButton';

storiesOf('Components/SimpleToolbar', module)
  .addDecorator(
    hostDecorator({
      width: '100%'
    })
  )
  .add('Dark', () => (
    <SimpleToolbar
      variant="dark"
      title="Report an Interruption"
      leftIcon={{
        icon: 'arrow_back',
        onClick: action('onClick leftIcon')
      }}
    />
  ))
  .add('Light', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'arrow_back',
        onClick: action('onClick leftIcon')
      }}
    />
  ))
  .add('Dark right icon', () => (
    <SimpleToolbar
      variant="dark"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      rightIcon={{
        icon: 'arrow_forward',
        onClick: action('onClick rightIcon')
      }}
    />
  ))
  .add('Light right icon', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      rightIcon={{
        icon: 'arrow_forward',
        onClick: action('onClick rightIcon')
      }}
    />
  ))
  .add('Light right button', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      rightIcon={{
        icon: 'arrow_forward',
        onClick: action('onClick rightIcon')
      }}
    />
  ))
  .add('Light right', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      rightComponent={{
        component: <SimpleToolbarButton text="Confirm" />,
        onClick: action('onClick rightComponent')
      }}
    />
  ))
  .add('Center component', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      centerComponent={
        <div
          style={{
            width: 300,
            flex: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Typography variant="distance">Center Component</Typography>
        </div>
      }
      rightComponent={{
        component: <SimpleToolbarButton text="Confirm" />,
        onClick: action('onClick rightComponent')
      }}
    />
  ))
  .add('Part SimpleToolbarButton button enabled', () => (
    <SimpleToolbarButton text="Confirm" onClick={action('onClick')} />
  ))
  .add('Part SimpleToolbarButton button disabled', () => (
    <SimpleToolbarButton text="Confirm" disabled onClick={action('onClick')} />
  ));
