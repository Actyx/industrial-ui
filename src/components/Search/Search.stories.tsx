/* tslint:disable: no-this no-class no-expression-statement */
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

storiesOf('Components|Search', module)
  .addDecorator(hostDecorator())
  .add('base', () => {
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
  .add('wrapper', () => <SearchWrapper />);
