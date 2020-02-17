import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { FooterWithDoubleConfirmation, Mode } from './FooterWithDoubleConfirmation';

const baseProps = {
  valid: false,
  mode: Mode.Normal,
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

class AnimationWrapper extends React.Component<{}, { mode: Mode }> {
  state: { mode: Mode } = {
    mode: Mode.Normal
  };
  render(): React.ReactNode {
    const { mode } = this.state;
    return (
      <FooterWithDoubleConfirmation
        {...baseProps}
        valid
        mode={mode}
        onSelectYes={action('onSelectYes')}
        onSelectNo={() => this.setState({ mode: Mode.Normal })}
        onConfirm={() => this.setState({ mode: Mode.Confirmation })}
      />
    );
  }
}

storiesOf('Components|Dialog.FooterWithDoubleConfirmation', module)
  .addDecorator(hostDecorator({}))
  .add('confirm no valid', () => <FooterWithDoubleConfirmation {...baseProps} mode={Mode.Normal} />)
  .add('confirm valid', () => (
    <FooterWithDoubleConfirmation {...baseProps} mode={Mode.Normal} valid />
  ))
  .add('enableCancel', () => (
    <FooterWithDoubleConfirmation {...baseProps} mode={Mode.Normal} enableCancel />
  ))
  .add('mode confirmation', () => (
    <FooterWithDoubleConfirmation {...baseProps} mode={Mode.Confirmation} />
  ))
  .add('animation', () => {
    return <AnimationWrapper />;
  });
