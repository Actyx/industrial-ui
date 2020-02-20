import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { SignalStatus } from './SignalStatus';

storiesOf('Components|SignalStatus', module)
  .addDecorator(hostDecorator({}))
  .add('Running', () => <SignalStatus status="running" />)
  .add('Interrupted', () => <SignalStatus status="interrupted" />)
  .add('Idle', () => <SignalStatus status="idle" />)
  .add('Completed', () => <SignalStatus status="finished" />)
  .add('Running with text', () => <SignalStatus status="running" text="Some text" />)
  .add('Interrupted with text', () => <SignalStatus status="interrupted" text="Power failure" />);
