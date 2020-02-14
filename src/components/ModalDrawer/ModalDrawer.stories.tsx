import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { headerIcon, headerMain } from './Header.stories';
import { listMain, listSub } from './List.stories';
import { ModalDrawer } from './ModalDrawer';

const baseProps = {
  headerMain,
  listMain,
  listSub,
  handleClose: action('handleClose')
};

storiesOf('Components|ModalDrawer.ModalDrawer', module)
  .addDecorator(hostDecorator({}))
  .add('open', () => {
    const props = { ...baseProps, open: true, headerIcon };
    return <ModalDrawer {...props} />;
  })
  .add('close', () => {
    const props = { ...baseProps, open: false, headerIcon };
    return <ModalDrawer {...props} />;
  })
  .add('no header icon', () => {
    const props = { ...baseProps, open: true };
    return <ModalDrawer {...props} />;
  })
  .add('overflow', () => {
    const props = { ...baseProps, listMain: [...listMain, ...listMain, ...listMain], open: true };
    return <ModalDrawer {...props} />;
  });
