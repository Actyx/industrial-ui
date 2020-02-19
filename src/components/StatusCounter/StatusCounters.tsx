import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { StatusCounter } from './StatusCounter';
import { StatusType } from '../Status';

export type Counter = {
  status: StatusType;
  counter: number;
};

export type Counters = ReadonlyArray<Counter>;

type OuterProps = Readonly<{
  counters: Counters;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const StatusCountersComp = ({ classes, counters }: Props) => (
  <div className={classes.root}>
    {counters.map(({ status, counter }, idx) => (
      <StatusCounter key={`${idx}-${status}`} status={status} counter={counter} />
    ))}
  </div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    display: 'inline-flex',
    '& div:first-of-type': {
      marginLeft: 0
    },
    '& div': {
      marginLeft: -1
    }
  }
};

export const StatusCounters = compose<Props, OuterProps>(
  setDisplayName('StatusCounters'),
  injectSheet(styles)
)(StatusCountersComp);
