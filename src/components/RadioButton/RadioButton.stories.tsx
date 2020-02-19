import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { RadioButton } from './RadioButton';

storiesOf('Components|RadioButton', module)
  .addDecorator(hostDecorator())
  .add('Unchecked', () => (
    <RadioButton checked={false} color="neutral" onChange={action('onChange')} />
  ))
  .add('Checked', () => <RadioButton checked color="neutral" onChange={action('onChange')} />)
  .add('Disabled', () => (
    <RadioButton checked color="neutral" disabled onChange={action('onChange')} />
  ))
  .add('Primary unchecked', () => (
    <RadioButton checked={false} color="primary" onChange={action('onChange')} />
  ))
  .add('Primary checked', () => (
    <RadioButton checked color="primary" onChange={action('onChange')} />
  ))
  .add('Primary disabled', () => (
    <RadioButton checked color="primary" disabled onChange={action('onChange')} />
  ));
