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
import { Search } from './Search';

storiesOf('Components/Search', module)
  .addParameters({ component: Search })
  .addDecorator(hostDecorator())
  .add('Base', () => (
    <Search
      value=""
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
    />
  ))
  .add('value', () => (
    <Search
      value=""
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
    />
  ))
  .add('placeholder', () => (
    <Search
      value=""
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placeholder="Search for article group"
    />
  ))
  .add('Statefull', () => {
    function Statefull() {
      const [value, setValue] = React.useState<string>('');
      return (
        <Search
          value={value}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
          onChange={e => setValue(e.target.value)}
        />
      );
    }
    return <Statefull />;
  });
