import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { ClearableInput } from './ClearableInput';

const baseProps = {
  onChange: action('onChange'),
  onClearRequested: action('onClearRequested')
};

storiesOf('Components|ClearableInput', module)
  .addDecorator(hostDecorator())
  .add('No value', () => <ClearableInput value="" {...baseProps} />)
  .add('Value', () => <ClearableInput value="100" {...baseProps} />)
  .add('Larger', () => <ClearableInput value="100" long {...baseProps} />)
  .add('Interactable', () => {
    const Comp = () => {
      const [val, setVal] = React.useState('');

      const props = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setVal(e.currentTarget.value),
        onClearRequested: () => setVal('')
      };

      return <ClearableInput value={val} {...props} />;
    };

    return <Comp />;
  })
  .add('Empty value forSearch', () => <ClearableInput value="" {...baseProps} forSearch />)
  .add('Interactable long forSearch', () => {
    const Comp = () => {
      const [val, setVal] = React.useState('');

      const props = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setVal(e.currentTarget.value),
        onClearRequested: () => setVal('')
      };

      return <ClearableInput value={val} {...props} long forSearch />;
    };

    return <Comp />;
  });
