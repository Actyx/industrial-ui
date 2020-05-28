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
import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { StatusVariant } from '../Status';

type CompProps = Readonly<{
  variant: StatusVariant;
  counter: number;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const StatusCounterComp = ({ classes, variant, counter }: Props) => (
  <div className={classNames(classes.root, classes[variant])}>
    <Typography variant="subtext">{counter}⨉</Typography>
  </div>
);

const { 900: dark400 } = theme.palette.grey;

type ClassKey = 'root' | StatusVariant;

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    height: 25,
    minWidth: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px 0 10px'
  },
  ready: {
    border: `1px solid ${theme.palette.success.main}`,
    backgroundColor: theme.palette.success.light,
    '& span': {
      color: theme.palette.primary.contrastText
    }
  },
  unknown: {
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[100],
    '& span': {
      color: dark400
    }
  },
  requested: {
    border: `1px solid ${theme.palette.warning.dark}`,
    backgroundColor: theme.palette.warning.main,
    '& span': {
      color: theme.palette.primary.contrastText
    }
  }
};

export const StatusCounter = compose<Props, CompProps>(
  setDisplayName('StatusCounter'),
  injectSheet(styles)
)(StatusCounterComp);
