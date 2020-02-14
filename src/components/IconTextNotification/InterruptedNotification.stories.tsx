import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { InterruptedNotification } from './InterruptedNotification';

storiesOf('common|InterruptedNotification', module)
  .addDecorator(hostDecorator({}))
  .add('no counter', () => <InterruptedNotification />)
  .add('counter', () => <InterruptedNotification counter={3} />)
  .add('smallSize', () => <InterruptedNotification counter={3} smallSize />);
