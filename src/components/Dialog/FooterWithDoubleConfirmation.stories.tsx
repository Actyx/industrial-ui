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
import * as React from 'react';
import { FooterWithDoubleConfirmation } from './FooterWithDoubleConfirmation';

storiesOf('Components/Dialog/FooterWithDoubleConfirmation', module)
  .addParameters({ component: FooterWithDoubleConfirmation })
  .add('Confirm no valid', () => (
    <FooterWithDoubleConfirmation
      mode="normal"
      valid={false}
      cancelMessage="Cancel"
      confirmMessage="Confirm"
      yesMessage="Yes"
      noMessage="No"
      message="Message"
      onSelectYes={action('onSelectYes')}
      onSelectNo={action('onSelectNo')}
      onConfirm={action('onConfirm')}
      onCancel={action('onCancel')}
    />
  ))
  .add('Confirm valid', () => (
    <FooterWithDoubleConfirmation
      mode="normal"
      valid
      cancelMessage="Cancel"
      confirmMessage="Confirm"
      yesMessage="Yes"
      noMessage="No"
      message="Message"
      onSelectYes={action('onSelectYes')}
      onSelectNo={action('onSelectNo')}
      onConfirm={action('onConfirm')}
      onCancel={action('onCancel')}
    />
  ))
  // .add('No cancelMessage', () => (
  //   <FooterWithDoubleConfirmation
  //     mode="normal"
  //     valid={false}
  //     confirmMessage="Confirm"
  //     yesMessage="Yes"
  //     noMessage="No"
  //     message="Message"
  //     onSelectYes={action('onSelectYes')}
  //     onSelectNo={action('onSelectNo')}
  //     onConfirm={action('onConfirm')}
  //     onCancel={action('onCancel')}
  //     cancelMessage={undefined}
  //   />
  // ))
  .add('Mode confirmation', () => (
    <FooterWithDoubleConfirmation
      mode={'confirmation'}
      valid={false}
      cancelMessage="Cancel"
      confirmMessage="Confirm"
      yesMessage="Yes"
      noMessage="No"
      message="Message"
      onSelectYes={action('onSelectYes')}
      onSelectNo={action('onSelectNo')}
      onConfirm={action('onConfirm')}
      onCancel={action('onCancel')}
    />
  ))
  .add('Statefull', () => {
    function Statefull() {
      const [mode, setMode] = React.useState<'normal' | 'confirmation'>('normal');
      return (
        <FooterWithDoubleConfirmation
          mode={mode}
          cancelMessage="Cancel"
          confirmMessage="Confirm"
          yesMessage="Yes"
          noMessage="No"
          message="Message"
          onCancel={action('onCancel')}
          valid
          onSelectYes={action('onSelectYes')}
          onSelectNo={() => setMode('normal')}
          onConfirm={() => setMode('confirmation')}
        />
      );
    }

    return <Statefull />;
  });
