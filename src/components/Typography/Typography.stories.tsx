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
import * as React from 'react';
import { Typography } from './Typography';
import { hostDecorator, LoremIpsum } from '../../utils';

storiesOf('Components/Typography', module)
  .addDecorator(hostDecorator())
  .add('Standard', () => <Typography variant="standard">Standard</Typography>)
  .add('Standard bold', () => (
    <Typography variant="standard" bold>
      Standard Bold
    </Typography>
  ))
  .add('Standard semiBold', () => (
    <Typography variant="standard" semiBold>
      Standard semiBold
    </Typography>
  ))
  .add('Standard italic', () => (
    <Typography variant="standard" italic>
      Standard Italic
    </Typography>
  ))
  .add('Standard lowercase', () => (
    <Typography variant="standard" textTransform="lowercase">
      Standard
    </Typography>
  ))
  .add('Standard uppercase', () => (
    <Typography variant="standard" textTransform="uppercase">
      Standard
    </Typography>
  ))
  .add('Standard capitalize', () => (
    <Typography variant="standard" textTransform="capitalize">
      Standard
    </Typography>
  ))
  .add('Subtext', () => <Typography variant="subtext">Subtext</Typography>)
  .add('Distance', () => <Typography variant="distance">Distance</Typography>)
  .add('Big', () => <Typography variant="big">Big</Typography>)
  .add('Giant', () => <Typography variant="giant">Giant</Typography>)
  .add('Heading', () => <Typography variant="heading">Heading</Typography>)
  .add('noWrap', () => (
    <div style={{ width: 100 }}>
      <Typography variant="standard" noWrap>
        No wrap this line of text
      </Typography>
    </div>
  ))
  .add('ellipsis', () => (
    <div style={{ width: 500 }}>
      <Typography variant="standard" ellipsis>
        {LoremIpsum}
      </Typography>
    </div>
  ));
