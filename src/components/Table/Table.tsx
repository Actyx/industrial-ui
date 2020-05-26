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
  alternateColor?: boolean;
  dark?: boolean;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TableComp = ({ className, classes, children, alternateColor, dark }: Props) => (
  <table
    className={classNames(
      {
        [classes.tableDark]: dark,
        [classes.tableLight]: !dark,
        [classes.rowBorderDark]: dark,
        [classes.rowBorder]: !dark,
        [classes.alternateColorDark]: dark && alternateColor,
        [classes.alternateColor]: !dark && alternateColor
      },
      className
    )}
  >
    {children}
  </table>
);

type ClassKey =
  | 'tableLight'
  | 'tableDark'
  | 'alternateColor'
  | 'alternateColorDark'
  | 'rowBorder'
  | 'rowBorderDark';

const styles: StyleSheet<ClassKey, CompProps> = {
  tableLight: {
    width: '100%',
    borderCollapse: 'collapse',
    border: 'none',
    backgroundColor: theme.palette.common.white
  },
  tableDark: {
    width: '100%',
    borderCollapse: 'collapse',
    border: 'none',
    backgroundColor: theme.palette.grey[900]
  },
  alternateColor: {
    '& tbody > tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[50]
    }
  },
  alternateColorDark: {
    '& tbody > tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[700]
    }
  },
  rowBorder: {
    '& thead > tr': {
      borderBottom: `${1}px solid ${theme.palette.grey[400]}`
    },
    '& tbody > tr': {
      borderBottom: `${1}px solid ${theme.palette.grey[400]}`
    }
  },
  rowBorderDark: {
    '& thead > tr': {
      borderBottom: `${1}px solid ${theme.palette.grey[400]}`
    },
    '& tbody > tr': {
      borderBottom: `${1}px solid ${theme.palette.grey[900]}`
    }
  }
};

export const Table = compose<Props, CompProps>(
  setDisplayName('Table'),
  injectSheet(styles)
)(TableComp);
