import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Checkbox } from './Checkbox';

storiesOf('common|Checkbox', module)
  .addDecorator(hostDecorator())
  .add('unchecked', () => (
    <Checkbox checked={false} color="neutral" onChange={action('onChange')} />
  ))
  .add('checked', () => <Checkbox checked color="neutral" onChange={action('onChange')} />)
  .add('disabled', () => (
    <Checkbox checked color="neutral" disabled onChange={action('onChange')} />
  ))
  .add('primary unchecked', () => (
    <Checkbox checked={false} color="primary" onChange={action('onChange')} />
  ))
  .add('primary checked', () => <Checkbox checked color="primary" onChange={action('onChange')} />)
  .add('primary disabled', () => (
    <Checkbox checked color="primary" disabled onChange={action('onChange')} />
  ));
