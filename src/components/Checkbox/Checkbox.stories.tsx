import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { CheckboxState, CheckboxColor, Checkbox } from './Checkbox';

const state: CheckboxState = 'unchecked';
const color: CheckboxColor = 'neutral';

const baseProps = {
  state,
  color,
  onClick: action('onChange')
};

storiesOf('Components|Checkbox', module)
  .addDecorator(hostDecorator())
  .add('Indeterminate', () => <Checkbox {...baseProps} state={'indeterminate'} />)
  .add('Unchecked', () => <Checkbox {...baseProps} />)
  .add('Checked', () => <Checkbox {...baseProps} state={'checked'} />)
  .add('Disabled checked', () => <Checkbox {...baseProps} state="checked" disabled />)
  .add('Primary indeterminate', () => (
    <Checkbox {...baseProps} color="primary" state="indeterminate" />
  ))
  .add('Primary unchecked', () => <Checkbox {...baseProps} color="primary" state="unchecked" />)
  .add('Primary checked', () => <Checkbox {...baseProps} color="primary" state="checked" />)
  .add('Primary checked disabled', () => (
    <Checkbox {...baseProps} color="primary" state="checked" disabled />
  ));
