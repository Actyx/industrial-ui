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
import { title } from './DialogHeader.stories';
import { FooterWithConfirmation } from './FooterWithConfirmation';
import { FooterWithDoubleConfirmation } from './FooterWithDoubleConfirmation';

const baseProps = {
  size: 'md' as 'md',
  header: 'header',
  content: 'content',
  footer: 'action',
  onClose: action('onClose')
};

const DialogFooterWithDoubleConfirmation = ({}) => {
  const [isConfirmed, setIsConfirmed] = React.useState<boolean>(false);
  const props = {
    ...baseProps,
    size: 'xlw' as 'xlw',
    header: <DialogHeader text="Title dialog" />,
    footer: (
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
    )
  };
  return <Dialog {...props} />;
};

storiesOf('Components/Dialog/Dialog', module)
  .add('Size md title', () => {
    const props = { ...baseProps, title };
    return <Dialog {...props} />;
  })
  .add('Size md header', () => {
    const props = { ...baseProps, header: 'Custom header' };
    return <Dialog {...props} />;
  })
  .add('Size xs', () => {
    const props = { ...baseProps, size: 'xs' as 'xs' };
    return <Dialog {...props} />;
  })
  .add('Size sm', () => {
    const props = { ...baseProps, size: 'sm' as 'sm' };
    return <Dialog {...props} />;
  })
  .add('Size xl', () => {
    const props = { ...baseProps, size: 'xl' as 'xl' };
    return <Dialog {...props} />;
  })
  .add('Size xlw', () => {
    const props = { ...baseProps, size: 'xlw' as 'xlw' };
    return <Dialog {...props} />;
  })
  .add('Size xxl', () => {
    const props = { ...baseProps, size: 'xxl' as 'xxl' };
    return <Dialog {...props} />;
  })
  .add('Size header top right', () => {
    const props = {
      ...baseProps,
      size: 'xl' as 'xl',
      header: <DialogHeader text="Header" rightComponent={'some conttent here'} />
    };
    return <Dialog {...props} />;
  })
  .add('With FooterWithConfirmation', () => {
    const props = {
      ...baseProps,
      size: 'xlw' as 'xlw',
      header: <DialogHeader text="Title dialog" />,
      footer: (
        <FooterWithConfirmation
          confirmMessage="Confirm"
          onCancel={action('onCancel')}
          onConfirm={action('onConfirm')}
        />
      )
    };
    return <Dialog {...props} />;
  })
  .add('With FooterWithDoubleConfirmation', () => <DialogFooterWithDoubleConfirmation />);
