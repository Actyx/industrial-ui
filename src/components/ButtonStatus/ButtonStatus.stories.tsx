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
import { ButtonStatus } from './ButtonStatus';

const baseProps = {
  text: 'Platform 1',
  onSelect: action('onSelect')
};

storiesOf('Components/ButtonStatus', module)
  .addDecorator(hostDecorator())

  .add('Selected icon', () => {
    const props = {
      ...baseProps,
      selected: true,
      icon: 'person'
    };
    return <ButtonStatus {...props} />;
  })
  .add('Unselected icon', () => {
    const props = {
      ...baseProps,
      selected: false,
      icon: 'person'
    };
    return <ButtonStatus {...props} />;
  })
  .add('Selected no icon', () => {
    const props = {
      ...baseProps,
      selected: true
    };
    return <ButtonStatus {...props} />;
  })
  .add('Unselected no icon', () => {
    const props = {
      ...baseProps,
      selected: false
    };
    return <ButtonStatus {...props} />;
  })
  .add('Text', () => {
    const props = {
      ...baseProps,
      selected: false
    };
    return <ButtonStatus {...props} />;
  })
  .add('Long text', () => {
    const props = {
      ...baseProps,
      text: 'Very long content',
      selected: false
    };
    return <ButtonStatus {...props} />;
  });
