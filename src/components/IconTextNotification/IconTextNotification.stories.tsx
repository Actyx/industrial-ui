import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { IconTextNotification } from './IconTextNotification';
import { red } from '../../colors';

const warningBaseProps = {
  icon: 'warning',
  text: 'Interrupted',
  color: red.A700
};

const genericBaseProps = {
  icon: 'info',
  text: 'Generic text',
  color: theme.palette.primary.main,
  counter: 17
};

storiesOf('Components|IconTextNotification', module)
  .addDecorator(hostDecorator({}))
  .add('Warning', () => <IconTextNotification {...warningBaseProps} counter={3} />)
  .add('Warning counter', () => <IconTextNotification {...warningBaseProps} />)
  .add('Generic counter', () => <IconTextNotification {...genericBaseProps} />)
  .add('Small size', () => <IconTextNotification {...genericBaseProps} smallSize />);
