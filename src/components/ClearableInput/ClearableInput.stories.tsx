import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { ClearableInput } from './ClearableInput';

const baseProps = {
  onChange: action('onChange'),
  onClearRequested: action('onClearRequested')
};

storiesOf('common|ClearableInput', module)
  .addDecorator(hostDecorator())
  .add('no value', () => <ClearableInput value="" {...baseProps} />)
  .add('value', () => <ClearableInput value="100" {...baseProps} />)
  .add('larger', () => <ClearableInput value="100" long {...baseProps} />)
  .add('interactable', () => {
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
  .add('forSearch empty value', () => <ClearableInput value="" {...baseProps} forSearch />)
  .add('forSearch interactable long', () => {
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
