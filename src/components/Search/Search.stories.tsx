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

const baseProps = {
  value: '',
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
  onChange: action('onChange')
};

const placeholder = 'Search for article group';

class SearchWrapper extends React.Component<{}, { searchTerm: string }> {
  state = {
    searchTerm: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
    baseProps.onChange(e);
  };

  render(): React.ReactNode {
    const { searchTerm } = this.state;
    const props = { ...baseProps, value: searchTerm, placeholder, onChange: this.handleChange };
    return <Search {...props} />;
  }
}

storiesOf('Components/Search', module)
  .addParameters({ component: Search })
  .addDecorator(hostDecorator())
  .add('Base', () => {
    const props = { ...baseProps };
    return <Search {...props} />;
  })
  .add('value', () => {
    const props = { ...baseProps, value: 'Abc' };
    return <Search {...props} />;
  })
  .add('placeholder', () => {
    const props = { ...baseProps, placeholder };
    return <Search {...props} />;
  })
  .add('Wrapper', () => <SearchWrapper />);
