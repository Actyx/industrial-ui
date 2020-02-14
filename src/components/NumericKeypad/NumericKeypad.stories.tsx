import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { NumericKeypad } from './NumericKeypad';

const baseProps = {
  clear: false,
  onChange: action('onChange')
};

storiesOf('Components|NumericKeypad.NumericKeypad', module)
  .addDecorator(hostDecorator())
  .add('no initial value', () => <NumericKeypad {...baseProps} />)
  .add('initial value', () => <NumericKeypad {...baseProps} defaultValue={1500} />)
  .add('decimal', () => <NumericKeypad {...baseProps} decimal />)
  .add('invalid', () => <NumericKeypad {...baseProps} defaultValue={0} invalid />)
  .add('hideInput', () => <NumericKeypad {...baseProps} hideInput defaultValue={1500} />)
  .add('hideNegative', () => <NumericKeypad {...baseProps} hideNegative defaultValue={1500} />);
