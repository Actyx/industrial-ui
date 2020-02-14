import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { SignalStatus } from './SignalStatus';

storiesOf('common|SignalStatus', module)
  .addDecorator(hostDecorator({}))
  .add('running', () => <SignalStatus status="running" />)
  .add('interrupted', () => <SignalStatus status="interrupted" />)
  .add('idle', () => <SignalStatus status="idle" />)
  .add('completed', () => <SignalStatus status="finished" />)
  .add('running with text', () => <SignalStatus status="running" text="Some text" />)
  .add('interrupted with text', () => <SignalStatus status="interrupted" text="Power failure" />);
