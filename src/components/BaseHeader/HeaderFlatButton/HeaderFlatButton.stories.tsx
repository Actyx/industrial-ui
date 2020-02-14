import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../../utils';
import * as React from 'react';
import { HeaderFlatButton } from './HeaderFlatButton';

storiesOf('common|BaseHeader.HeaderFlatButton', module)
  .addDecorator(hostDecorator({}))
  .add('light background', () => (
    <HeaderFlatButton onClick={action('onClick')} type="keyboard_backspace" />
  ));
