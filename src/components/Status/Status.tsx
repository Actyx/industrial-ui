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

export type StatusVariant = 'ready' | 'unknown' | 'requested';

type CompProps = Readonly<{
  variant: StatusVariant;
  message: string;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const StatusComp = ({ classes, variant: status }: Props) => (
  <div className={classNames(classes.root, classes[status])}>
    <Typography variant="standard" bold textTransform="uppercase">
      {status}
    </Typography>
  </div>
);

type ClassKey = 'root' | StatusVariant;

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    width: 135,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ready: {
    border: `1px solid ${theme.palette.success.main}`,
    backgroundColor: theme.palette.success.light,
    '& span > span': {
      color: theme.palette.primary.contrastText
    }
  },
  unknown: {
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[100],
    '& span > span': {
      color: theme.palette.grey[900]
    }
  },
  requested: {
    border: `1px solid ${theme.palette.warning.main}`,
    backgroundColor: theme.palette.warning.main,
    '& span > span': {
      color: theme.palette.primary.contrastText
    }
  }
};

export const Status = compose<Props, CompProps>(
  setDisplayName('Status'),
  injectSheet(styles)
)(StatusComp);
