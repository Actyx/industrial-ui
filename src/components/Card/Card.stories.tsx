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
import { Typography } from '../Typography';
import { Card } from './Card';
import { common } from '../../colors';

const baseProps = {
  size: 'md' as 'md',
  color: 'neutral' as 'neutral',
  raised: true,
  header: <Typography variant="distance">Title card</Typography>,
  content: 'content'
};

storiesOf('Components/Card/Card', module)
  .addDecorator(hostDecorator({}))
  .add('Raised', () => <Card {...baseProps} />)
  .add('Action', () => {
    const props = { ...baseProps, raised: false, action: 'action' };
    return <Card {...props} />;
  })
  .add('Flat', () => {
    const props = { ...baseProps, raised: false };
    return <Card {...props} />;
  })
  .add('Color red', () => {
    const props = {
      ...baseProps,
      color: 'red' as 'red',
      header: (
        <Typography variant="distance" color={common.white}>
          Title card
        </Typography>
      )
    };
    return <Card {...props} />;
  });
