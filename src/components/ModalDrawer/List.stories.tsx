import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { List, ListItem } from './List';

const listMain: ReadonlyArray<ListItem> = [
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

storiesOf('Components|ModalDrawer.Parts', module)
  .addDecorator(hostDecorator({}))
  .add('List', () => <List items={listMain} handleClose={action('handleClose')} />);
