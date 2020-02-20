import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import {
  FooterWithDoubleConfirmation,
  FooterWithDoubleConfirmationMode
} from './FooterWithDoubleConfirmation';

const baseProps = {
  valid: false,
  mode: FooterWithDoubleConfirmationMode.Normal,
  enableCancel: false,
  cancelMessage: 'Cancel',
  confirmMessage: 'Confirm',
  yesMessage: 'Yes',
  noMessage: 'No',
  message: 'Message',
  onSelectYes: action('onSelectYes'),
  onSelectNo: action('onSelectNo'),
  onConfirm: action('onConfirm'),
  onCancel: action('onCancel')
};

class AnimationWrapper extends React.Component<{}, { mode: FooterWithDoubleConfirmationMode }> {
  state: { mode: FooterWithDoubleConfirmationMode } = {
    mode: FooterWithDoubleConfirmationMode.Normal
  };
  render(): React.ReactNode {
    const { mode } = this.state;
    return (
      <FooterWithDoubleConfirmation
        {...baseProps}
        valid
        mode={mode}
        onSelectYes={action('onSelectYes')}
        onSelectNo={() => this.setState({ mode: FooterWithDoubleConfirmationMode.Normal })}
        onConfirm={() => this.setState({ mode: FooterWithDoubleConfirmationMode.Confirmation })}
      />
    );
  }
}

storiesOf('Components|Dialog.FooterWithDoubleConfirmation', module)
  .addDecorator(hostDecorator({}))
  .add('Confirm no valid', () => (
    <FooterWithDoubleConfirmation {...baseProps} mode={FooterWithDoubleConfirmationMode.Normal} />
  ))
  .add('Confirm valid', () => (
    <FooterWithDoubleConfirmation
      {...baseProps}
      mode={FooterWithDoubleConfirmationMode.Normal}
      valid
    />
  ))
  .add('enableCancel', () => (
    <FooterWithDoubleConfirmation
      {...baseProps}
      mode={FooterWithDoubleConfirmationMode.Normal}
      enableCancel
    />
  ))
  .add('Mode confirmation', () => (
    <FooterWithDoubleConfirmation
      {...baseProps}
      mode={FooterWithDoubleConfirmationMode.Confirmation}
    />
  ))
  .add('Animation', () => {
    return <AnimationWrapper />;
  });
