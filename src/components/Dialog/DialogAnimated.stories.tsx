import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { DialogAnimated } from './DialogAnimated';
import { DialogHeader } from './DialogHeader';
import { title } from './DialogHeader.stories';

const baseProps = {
  open: true,
  size: 'md' as 'md',
  content: 'content',
  footer: 'action'
};

storiesOf('common|Dialog.DialogAnimated', module)
  .addDecorator(hostDecorator({}))
  .add('open', () => {
    const props = { ...baseProps, open: true, header: <DialogHeader text={title} /> };
    return <DialogAnimated {...props} />;
  })
  .add('close', () => {
    const props = { ...baseProps, open: false, header: <DialogHeader text={title} /> };
    return <DialogAnimated {...props} />;
  })
  .add('header', () => {
    const props = { ...baseProps, open: true, header: 'Custom header' };
    return <DialogAnimated {...props} />;
  });
