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
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  className?: string;
  children: React.ReactNode;
  numeric?: boolean;
  style?: React.CSSProperties;
  cellType?: string;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TableCellComp = ({ classes, className, children, numeric, style, cellType }: Props) => (
  <td
    data-celltype={cellType}
    className={classNames(classes.tableCell, { [classes.numeric]: numeric }, className)}
    style={style}
  >
    {children}
  </td>
);

type ClassKey = 'tableCell' | 'numeric';

const styles: StyleSheet<ClassKey> = {
  tableCell: {
    padding: 10
  },
  numeric: {
    textAlign: 'right'
  }
};

export const TableCell = compose<Props, CompProps>(
  setDisplayName('TableCell'),
  injectSheet(styles)
)(TableCellComp);
