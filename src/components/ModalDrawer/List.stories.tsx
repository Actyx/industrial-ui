import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { List, ListItem } from './List';

export const listMain: ReadonlyArray<ListItem> = [
  {
    id: 'a',
    name: 'Activities Overview',
    icon: 'assignment',
    onClick: action('onClick')
  },
  {
    id: 'b',
    name: 'Workstation Documentation',
    icon: 'insert_drive_file',
    onClick: action('onClick')
  }
];

export const listSub: ReadonlyArray<ListItem> = [
  {
    id: 'c',
    name: 'Lock',
    icon: 'lock',
    onClick: action('onClick')
  },
  {
    id: 'd',
    name: 'Sign Out',
    icon: 'exit_to_app',
    onClick: action('onClick')
  }
];

storiesOf('Components|ModalDrawer.List', module)
  .addDecorator(hostDecorator({}))
  .add('base', () => <List list={listMain} handleClose={action('handleClose')} />);
