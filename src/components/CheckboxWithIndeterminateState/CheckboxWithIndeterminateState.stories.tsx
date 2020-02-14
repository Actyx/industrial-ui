import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import {
  CheckboxWithIndeterminateState,
  CheckboxWithIndeterminateStateColor
} from './CheckboxWithIndeterminateState';

const state: CheckboxWithIndeterminateState = 'unchecked';
const color: CheckboxWithIndeterminateStateColor = 'neutral';

const props = {
  state,
  color,
  onClick: action('onChange')
};

storiesOf('Components|CheckboxWithIndeterminateState', module)
  .addDecorator(hostDecorator())
  .add('indeterminate', () => <CheckboxWithIndeterminateState {...props} state={'indeterminate'} />)
  .add('unchecked', () => <CheckboxWithIndeterminateState {...props} />)
  .add('checked', () => <CheckboxWithIndeterminateState {...props} state={'checked'} />)
  .add('disabled', () => <CheckboxWithIndeterminateState {...props} disabled />)
  .add('primary unchecked', () => <CheckboxWithIndeterminateState {...props} color="primary" />);
