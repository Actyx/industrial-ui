import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import {
  CheckboxWithIndeterminateState,
  CheckboxIndeterminateState,
  CheckboxIndeterminate
} from './CheckboxIndeterminate';

const state: CheckboxWithIndeterminateState = 'unchecked';
const color: CheckboxIndeterminateState = 'neutral';

const props = {
  state,
  color,
  onClick: action('onChange')
};

storiesOf('Components|CheckboxIndeterminate', module)
  .addDecorator(hostDecorator())
  .add('Indeterminate', () => <CheckboxIndeterminate {...props} state={'indeterminate'} />)
  .add('Unchecked', () => <CheckboxIndeterminate {...props} />)
  .add('Checked', () => <CheckboxIndeterminate {...props} state={'checked'} />)
  .add('Disabled', () => <CheckboxIndeterminate {...props} disabled />)
  .add('Primary unchecked', () => <CheckboxIndeterminate {...props} color="primary" />);
