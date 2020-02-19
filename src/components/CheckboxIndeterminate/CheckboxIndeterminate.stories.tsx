import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import {
  CheckboxWithIndeterminateState,
  CheckboxWithIndeterminateStateColor,
  CheckboxIndeterminate
} from './CheckboxIndeterminate';

const state: CheckboxWithIndeterminateState = 'unchecked';
const color: CheckboxWithIndeterminateStateColor = 'neutral';

const props = {
  state,
  color,
  onClick: action('onChange')
};

storiesOf('Components|CheckboxWithIndeterminateState', module)
  .addDecorator(hostDecorator())
  .add('indeterminate', () => <CheckboxIndeterminate {...props} state={'indeterminate'} />)
  .add('unchecked', () => <CheckboxIndeterminate {...props} />)
  .add('checked', () => <CheckboxIndeterminate {...props} state={'checked'} />)
  .add('disabled', () => <CheckboxIndeterminate {...props} disabled />)
  .add('primary unchecked', () => <CheckboxIndeterminate {...props} color="primary" />);
