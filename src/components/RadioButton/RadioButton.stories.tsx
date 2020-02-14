import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { RadioButton } from './RadioButton';

storiesOf('common|RadioButton', module)
  .addDecorator(hostDecorator())
  .add('unchecked', () => (
    <RadioButton checked={false} color="neutral" onChange={action('onChange')} />
  ))
  .add('checked', () => <RadioButton checked color="neutral" onChange={action('onChange')} />)
  .add('disabled', () => (
    <RadioButton checked color="neutral" disabled onChange={action('onChange')} />
  ))
  .add('primary unchecked', () => (
    <RadioButton checked={false} color="primary" onChange={action('onChange')} />
  ))
  .add('primary checked', () => (
    <RadioButton checked color="primary" onChange={action('onChange')} />
  ))
  .add('primary disabled', () => (
    <RadioButton checked color="primary" disabled onChange={action('onChange')} />
  ));
