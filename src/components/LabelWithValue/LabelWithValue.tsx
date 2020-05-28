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

type CompProps = Readonly<{
  className?: string;
  label: React.ReactNode;
  value: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const LabelWithValueComp = ({ classes, className, label, value }: Props) => (
  <div className={className}>
    <div className={classes.label}>{label}</div>
    <div className={classes.value}>{value}</div>
  </div>
);

type ClassKey = 'label' | 'value';

const styles: StyleSheet<ClassKey> = {
  label: {
    textTransform: 'uppercase',
    color: theme.palette.grey[700],
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 18,
    lineHeight: 1
  },
  value: {
    fontSize: 30,
    lineHeight: 1
  }
};

export const LabelWithValue = compose<Props, CompProps>(
  setDisplayName('LabelWithValue'),
  injectSheet(styles)
)(LabelWithValueComp);
