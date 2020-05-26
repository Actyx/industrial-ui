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
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  className?: string;
  children: React.ReactNode;
  active?: boolean;
  condensed?: boolean;
  onSelect?: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TableRowComp = ({ classes, className, children, active, condensed, onSelect }: Props) => (
  <tr
    onClick={onSelect}
    className={classNames(condensed === true ? classes.condensed : classes.tableRow, className)}
    style={active ? { backgroundColor: theme.palette.primary.light } : {}}
  >
    {children}
  </tr>
);

type ClassKey = 'tableRow' | 'condensed';

const styles: StyleSheet<ClassKey> = {
  tableRow: {
    height: 80
  },
  condensed: {
    height: 60
  }
};

export const TableRow = compose<Props, CompProps>(
  setDisplayName('TableRow'),
  injectSheet(styles)
)(TableRowComp);
