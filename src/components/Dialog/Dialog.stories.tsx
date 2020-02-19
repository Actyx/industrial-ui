import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Dialog } from './Dialog';
import { DialogHeader } from './DialogHeader';
import { title } from './DialogHeader.stories';

const baseProps = {
  size: 'md' as 'md',
  header: 'header',
  content: 'content',
  footer: 'action',
  onClose: action('onClose')
};

storiesOf('Components|Dialog.Dialog', module)
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
  });
