import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { StatusCounters, Counters, Counter } from './StatusCounters';

const ready: Counter = { status: 'ready', counter: 2 };
const unknown: Counter = { status: 'unknown', counter: 4 };
const requested: Counter = { status: 'requested', counter: 19 };
const ex1: Counters = [ready];
const ex2: Counters = [unknown, requested];
const ex3: Counters = [ready, unknown, requested];

storiesOf('common|Status.StatusCounters', module)
  .addDecorator(hostDecorator({}))
  .add('example 1', () => <StatusCounters counters={ex1} />)
  .add('example 2', () => <StatusCounters counters={ex2} />)
  .add('example 3', () => <StatusCounters counters={ex3} />);
