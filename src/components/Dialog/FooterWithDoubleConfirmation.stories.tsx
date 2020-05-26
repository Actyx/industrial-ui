/*
 * Copyright 2020 Actyx AG
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

storiesOf('Components/Dialog/FooterWithDoubleConfirmation', module)
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
