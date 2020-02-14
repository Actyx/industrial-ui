import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { IconTextNotification } from './IconTextNotification';

const warningBaseProps = {
  icon: 'warning',
  text: 'Interrupted',
  color: theme.palette.signal.red
};

const genericBaseProps = {
  icon: 'info',
  text: 'Generic text',
  color: theme.palette.actionHighlight.deepSkyBlue,
  counter: 17
};

storiesOf('common|IconTextNotification', module)
  .addDecorator(hostDecorator({}))
  .add('warning', () => <IconTextNotification {...warningBaseProps} counter={3} />)
  .add('warning counter', () => <IconTextNotification {...warningBaseProps} />)
  .add('generic counter', () => <IconTextNotification {...genericBaseProps} />)
  .add('smallSize', () => <IconTextNotification {...genericBaseProps} smallSize />);
