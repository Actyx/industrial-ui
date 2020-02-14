import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Header } from './Header';

export const headerMain = 'Workstation 005 - Machine Cleaning';

export const headerIcon = (
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

const baseProps = {
  main: headerMain
};

storiesOf('Components|ModalDrawer.Header', module)
  .addDecorator(
    hostDecorator({
      width: 500,
      height: 80
    })
  )
  .add('base', () => <Header {...baseProps} />)
  .add('icon', () => {
    const props = { ...baseProps, icon: headerIcon };
    return <Header {...props} />;
  });
