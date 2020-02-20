import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { ModalDrawer } from './ModalDrawer';
import { Header } from './Header';
import { ListItem, List } from './List';

const headerMain = 'Workstation 005 - Machine Cleaning';

const headerIcon = (
  <div
    onClick={action('onClick')}
    style={{
      height: 80,
      width: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    X
  </div>
);

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

const listSub: ReadonlyArray<ListItem> = [
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

const baseProps = {
  headerMain,
  listMain,
  listSub,
  handleClose: action('handleClose')
};

storiesOf('Components|ModalDrawer', module)
  .addDecorator(hostDecorator({}))
  .add('Open', () => {
    const props = { ...baseProps, open: true, headerIcon };
    return <ModalDrawer {...props} />;
  })
  .add('Close', () => {
    const props = { ...baseProps, open: false, headerIcon };
    return <ModalDrawer {...props} />;
  })
  .add('No header icon', () => {
    const props = { ...baseProps, open: true };
    return <ModalDrawer {...props} />;
  })
  .add('Overflow', () => {
    const props = { ...baseProps, listMain: [...listMain, ...listMain, ...listMain], open: true };
    return <ModalDrawer {...props} />;
  })
  .add('Part Header', () => <Header main={headerMain} icon="x" />)
  .add('Part Header icon', () => <Header main={headerMain} icon={headerIcon} />)
  .add('Part List', () => <List items={listMain} handleClose={action('handleClose')} />);
