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
import { Dialog } from './Dialog';
import { DialogHeader } from './DialogHeader';
import { FooterWithConfirmation } from './FooterWithConfirmation';
import { FooterWithDoubleConfirmation } from './FooterWithDoubleConfirmation';
import { hostDecorator } from '../../utils';

storiesOf('Components/Dialog/Dialog', module)
  .addParameters({ component: Dialog })
  .addDecorator(
    hostDecorator({
      width: 900,
      height: 900
    })
  )
  .add('Size md', () => (
    <Dialog
      header="header"
      content="content"
      footer="action"
      onClose={action('onClose')}
      size="md"
    />
  ))
  .add('Size md header', () => (
    <Dialog
      size="md"
      header="Custom header"
      content="content"
      footer="action"
      onClose={action('onClose')}
    />
  ))
  .add('Size xs', () => (
    <Dialog content="content" footer="action" onClose={action('onClose')} size="xs" />
  ))
  .add('Size sm', () => (
    <Dialog content="content" footer="action" onClose={action('onClose')} size="sm" />
  ))
  .add('Size xl', () => (
    <Dialog content="content" footer="action" onClose={action('onClose')} size="xl" />
  ))
  .add('Size xlw', () => (
    <Dialog content="content" footer="action" onClose={action('onClose')} size="xlw" />
  ))
  .add('Size xxl', () => (
    <Dialog
      header="header"
      content="content"
      footer="action"
      onClose={action('onClose')}
      size="xxl"
    />
  ))
  .add('Size header top right', () => (
    <Dialog
      content="content"
      footer="action"
      onClose={action('onClose')}
      header={<DialogHeader text="Header" rightComponent="some content here" />}
      size="xl"
    />
  ))
  .add('With FooterWithConfirmation', () => (
    <Dialog
      content="content"
      onClose={action('onClose')}
      size="xl"
      header={<DialogHeader text="Title dialog" />}
      footer={
        <FooterWithConfirmation
          confirmMessage="Confirm"
          onCancel={action('onCancel')}
          onConfirm={action('onConfirm')}
        />
      }
    />
  ))
  .add('With FooterWithDoubleConfirmation', () => {
    function DialogFooterWithDoubleConfirmation() {
      const [isConfirmed, setIsConfirmed] = React.useState<boolean>(false);
      return (
        <Dialog
          content="content"
          onClose={action('onClose')}
          size="xlw"
          header={<DialogHeader text="Title dialog" />}
          footer={
            <FooterWithDoubleConfirmation
              valid={true}
              mode={isConfirmed === true ? 'confirmation' : 'normal'}
              cancelMessage="Cancel"
              confirmMessage="Comfirm"
              yesMessage="Yes"
              noMessage="No"
              message="Are you sure?"
              onSelectNo={action('onSelectNo')}
              onSelectYes={action('onSelectYes')}
              onCancel={action('onCancel')}
              onConfirm={() => setIsConfirmed(true)}
            />
          }
        />
      );
    }

    return <DialogFooterWithDoubleConfirmation />;
  });
