/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { StatusCounter } from './StatusCounter';
import { StatusVariant } from '../Status';

export type StatusCountersCounter = {
  variant: StatusVariant;
  counter: number;
};

type CompProps = Readonly<{
  counters: ReadonlyArray<StatusCountersCounter>;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const StatusCountersComp = ({ classes, counters }: Props) => (
  <div className={classes.root}>
    {counters.map(({ variant, counter }, idx) => (
      <StatusCounter key={`${idx}-${variant}`} variant={variant} counter={counter} />
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
