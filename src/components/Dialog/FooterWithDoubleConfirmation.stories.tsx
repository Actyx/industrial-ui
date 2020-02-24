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
  mode: 'Normal' as 'Normal',
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
    mode: 'normal'
  };
  render(): React.ReactNode {
    const { mode } = this.state;
    return (
      <FooterWithDoubleConfirmation
        {...baseProps}
        valid
        mode={mode}
        onSelectYes={action('onSelectYes')}
        onSelectNo={() => this.setState({ mode: 'normal' })}
        onConfirm={() => this.setState({ mode: 'confirmation' })}
      />
    );
  }
}

storiesOf('Components|Dialog.FooterWithDoubleConfirmation', module)
  .addDecorator(hostDecorator({}))
  .add('Confirm no valid', () => <FooterWithDoubleConfirmation {...baseProps} mode={'normal'} />)
  .add('Confirm valid', () => <FooterWithDoubleConfirmation {...baseProps} mode={'normal'} valid />)
  .add('no cancelMessage', () => (
    <FooterWithDoubleConfirmation {...baseProps} mode={'normal'} cancelMessage={undefined} />
  ))
  .add('Mode confirmation', () => (
    <FooterWithDoubleConfirmation {...baseProps} mode={'confirmation'} />
  ))
  .add('Animation', () => {
    return <AnimationWrapper />;
  });
