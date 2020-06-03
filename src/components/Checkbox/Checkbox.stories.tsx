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
import * as React from 'react';
import { Checkbox } from './Checkbox';

storiesOf('Components/Checkbox', module)
  .addParameters({ component: Checkbox })
  .add('Indeterminate', () => (
    <Checkbox state="indeterminate" color="neutral" onClick={action('onClick')} />
  ))
  .add('Unchecked', () => (
    <Checkbox state="unchecked" color="neutral" onClick={action('onClick')} />
  ))
  .add('Checked', () => <Checkbox state="checked" color="neutral" onClick={action('onClick')} />)
  .add('Disabled checked', () => (
    <Checkbox state="checked" disabled color="neutral" onClick={action('onClick')} />
  ))
  .add('Disabled unchecked', () => (
    <Checkbox state="unchecked" disabled color="neutral" onClick={action('onClick')} />
  ))
  .add('Disabled indeterminate', () => (
    <Checkbox state="indeterminate" disabled color="neutral" onClick={action('onClick')} />
  ))
  .add('Primary indeterminate', () => (
    <Checkbox color="primary" state="indeterminate" onClick={action('onClick')} />
  ))
  .add('Primary unchecked', () => (
    <Checkbox color="primary" state="unchecked" onClick={action('onClick')} />
  ))
  .add('Primary checked', () => (
    <Checkbox color="primary" state="checked" onClick={action('onClick')} />
  ))
  .add('Primary checked disabled', () => (
    <Checkbox color="primary" state="checked" disabled onClick={action('onClick')} />
  ))
  .add('Primary checked undisabled', () => (
    <Checkbox color="primary" state="unchecked" disabled onClick={action('onClick')} />
  ))
  .add('Primary checked indeterminate', () => (
    <Checkbox color="primary" state="indeterminate" disabled onClick={action('onClick')} />
  ));
