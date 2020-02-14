import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { FooterWithConfirmation } from './FooterWithConfirmation';

const baseProps = {
  disableConfirm: false,
  confirmMessage: 'Confirm',
  onConfirm: action('onConfirm'),
  onCancel: action('onCancel')
};

storiesOf('Components|Dialog.FooterWithConfirmation', module)
  .addDecorator(hostDecorator({}))
  .add('confirmation', () => <FooterWithConfirmation {...baseProps} />)
  .add('disable confirmation', () => (
    <FooterWithConfirmation {...baseProps} confirmMessage="Confirm" disableConfirm />
  ));
