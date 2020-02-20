import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { StatusCounters, Counters, Counter } from './StatusCounters';
import { StatusCounter } from './StatusCounter';

const ready: Counter = { status: 'ready', counter: 2 };
const unknown: Counter = { status: 'unknown', counter: 4 };
const requested: Counter = { status: 'requested', counter: 19 };
const ex1: Counters = [ready];
const ex2: Counters = [unknown, requested];
const ex3: Counters = [ready, unknown, requested];

storiesOf('Components|StatusCounters', module)
  .addDecorator(
    hostDecorator({
      width: 500
    })
  )
  .add('One counter', () => <StatusCounters counters={ex1} />)
  .add('Two counters', () => <StatusCounters counters={ex2} />)
  .add('Tree counters', () => <StatusCounters counters={ex3} />)
  .add('Part ready', () => <StatusCounter counter={1} status="ready" />)
  .add('Part requested', () => <StatusCounter counter={22} status="requested" />)
  .add('Part unknown', () => <StatusCounter counter={764} status="unknown" />)
  .add('Part long', () => <StatusCounter counter={43993487348734} status="ready" />);