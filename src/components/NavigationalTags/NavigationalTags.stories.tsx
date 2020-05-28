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
import { NavigationalTags } from './NavigationalTags';
import { Tag } from './Tag';

storiesOf('Components/NavigationalTags', module)
  .addParameters({ component: NavigationalTags })
  .add('Base', () => (
    <NavigationalTags
      tags={[
        {
          id: 'tag0',
          name: 'Tag name 0 information '
        },
        {
          id: 'tag1',
          name: 'Tag name 1 information'
        },
        {
          id: 'tag2',
          name: 'Tag name 2 information'
        }
      ]}
      onTagClose={action('onTagClose')}
    />
  ))
  .add('Part Tag', () => <Tag name="Tag name information" onClose={action('onClick')} />);
