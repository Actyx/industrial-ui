import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Checkbox } from './Checkbox';

storiesOf('Components|Checkbox', module)
  .addDecorator(hostDecorator())
  .add('Unchecked', () => (
    <Checkbox checked={false} color="neutral" onChange={action('onChange')} />
  ))
  .add('Checked', () => <Checkbox checked color="neutral" onChange={action('onChange')} />)
  .add('Disabled', () => (
    <Checkbox checked color="neutral" disabled onChange={action('onChange')} />
  ))
  .add('Primary unchecked', () => (
    <Checkbox checked={false} color="primary" onChange={action('onChange')} />
  ))
  .add('Primary checked', () => <Checkbox checked color="primary" onChange={action('onChange')} />)
  .add('Primary disabled', () => (
    <Checkbox checked color="primary" disabled onChange={action('onChange')} />
  ));
