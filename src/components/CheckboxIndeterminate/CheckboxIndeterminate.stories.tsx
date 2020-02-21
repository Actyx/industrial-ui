import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import {
  CheckboxIndeterminateState,
  CheckboxIndeterminateColor,
  CheckboxIndeterminate
} from './CheckboxIndeterminate';

const state: CheckboxIndeterminateState = 'unchecked';
const color: CheckboxIndeterminateColor = 'neutral';

const baseProps = {
  state,
  color,
  onClick: action('onChange')
};

storiesOf('Components|CheckboxIndeterminate', module)
  .addDecorator(hostDecorator())
  .add('Indeterminate', () => <CheckboxIndeterminate {...baseProps} state={'indeterminate'} />)
  .add('Unchecked', () => <CheckboxIndeterminate {...baseProps} />)
  .add('Checked', () => <CheckboxIndeterminate {...baseProps} state={'checked'} />)
  .add('Disabled', () => <CheckboxIndeterminate {...baseProps} disabled />)
  .add('Primary unchecked', () => <CheckboxIndeterminate {...baseProps} color="primary" />);
