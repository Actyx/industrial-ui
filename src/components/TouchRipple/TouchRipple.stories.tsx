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
import { TouchRipple } from './TouchRipple';

const baseProps = {
  onClick: action('onClick')
};
storiesOf('Components/TouchRipple', module)
  .addParameters({ component: TouchRipple })
  .addDecorator(
    hostDecorator({
      width: 200
    })
  )
  .add('enabled', () => (
    <TouchRipple {...baseProps}>
      <div>Click me!</div>
    </TouchRipple>
  ))
  .add('disabled', () => {
    const props = {
      ...baseProps,
      disabled: true
    };
    return (
      <TouchRipple {...props}>
        <div>Click me!</div>
      </TouchRipple>
    );
  });
