import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { StatusCounter } from './StatusCounter';
import { StatusVariant } from '../Status';

export type Counter = {
  status: StatusVariant;
  counter: number;
};

export type Counters = ReadonlyArray<Counter>;

type CompProps = Readonly<{
  counters: Counters;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const StatusCountersComp = ({ classes, counters }: Props) => (
  <div className={classes.root}>
    {counters.map(({ status, counter }, idx) => (
      <StatusCounter key={`${idx}-${status}`} status={status} counter={counter} />
    ))}
  </div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey, CompProps> = {
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

export const StatusCounters = compose<Props, CompProps>(
  setDisplayName('StatusCounters'),
  injectSheet(styles)
)(StatusCountersComp);
