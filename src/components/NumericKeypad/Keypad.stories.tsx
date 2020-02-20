import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Keypad } from './Keypad';

const baseProps = {
  onNumberSelect: action('onNumberSelect'),
  onMinusSelect: action('onMinusSelect'),
  onDeleteSelect: action('onDeleteSelect')
};

storiesOf('Components|NumericKeypad.Keypad', module)
  .addDecorator(hostDecorator())
  .add('Confirm integer', () => <Keypad {...baseProps} />)
  .add('Confirm decimal', () => (
    <Keypad {...baseProps} onDecimalSelect={action('onDecimalSelect')} />
  ))
  .add('Confirm minus', () => <Keypad {...baseProps} onDecimalSelect={action('onMinusSelect')} />)
  .add('hideNegative', () => <Keypad {...baseProps} hideNegative />);
