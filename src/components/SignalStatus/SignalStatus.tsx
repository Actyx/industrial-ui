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
import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { SignalCircular } from '../SignalCircular';
import { Typography } from '../Typography';

export type SignalStatusStatus =
  | 'running'
  | 'idle'
  | 'not started'
  | 'interrupted'
  | 'finished'
  | 'waiting'
  | 'unreleased';

type CompProps = Readonly<{
  status: SignalStatusStatus;
  text?: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const SignalStatusComp = ({ classes, status, text }: Props) => {
  const isInterrupted = status === 'interrupted';
  return (
    <div className={classes.root}>
      <div>
        <SignalCircular
          size="xs"
          color={
            status === 'running'
              ? 'green'
              : status === 'interrupted'
              ? 'red'
              : status === 'idle'
              ? 'lightGrey'
              : 'darkGrey'
          }
        />
      </div>
      <div className={classes.text}>
        <Typography
          variant="standard"
          textTransform="uppercase"
          color={isInterrupted ? theme.palette.error.main : undefined}
          bold={isInterrupted || undefined}
        >
          {status}
        </Typography>
        {text && (
          <Typography
            variant="standard"
            textTransform="capitalize"
            color={isInterrupted ? theme.palette.error.main : undefined}
            bold={isInterrupted || undefined}
          >
            {`: ${text}`}
          </Typography>
        )}
      </div>
    </div>
  );
};

type ClassKey = 'root' | 'text';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    display: 'flex',
    height: 30,
    '& > div:first-child': {
      display: 'flex',
      marginRight: 5,
      height: '100%',
      alignItems: 'center'
    }
  },
  text: {
    whiteSpace: 'nowrap'
  }
};

export const SignalStatus = compose<Props, CompProps>(
  setDisplayName('SignalStatus'),
  injectSheet(styles)
)(SignalStatusComp);
