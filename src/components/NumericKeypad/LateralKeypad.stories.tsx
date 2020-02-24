import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { LateralKeypad } from './LateralKeypad';

storiesOf('Components|NumericKeypad.LateralKeypad', module)
  .addDecorator(hostDecorator({}))
  .add('Open', () => (
    <LateralKeypad open onChange={action('onChange')} onDeleteSelect={action('onDeleteSelect')} />
  ))
  .add('Close', () => (
    <LateralKeypad
      open={false}
      onChange={action('onChange')}
      onDeleteSelect={action('onDeleteSelect')}
    />
  ));
