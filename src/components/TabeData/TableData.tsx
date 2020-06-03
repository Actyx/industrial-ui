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
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
// FIXME our custom type for `react-jss` currently do not support `createUseStyles`
//@ts-ignore
import { createUseStyles } from 'react-jss';

type Props<T> = Readonly<{
  className?: string;
  data: ReadonlyArray<T>;
  getUniqKey: (datum: T) => string;
  header: React.ReactNode;
  renderRow: (datum: T, idx: number) => React.ReactNode;
  setRowClassName?: (datum: T) => string | undefined;
  isRowSelected?: (datum: T) => boolean;
  onRowSelect?: (datum: T) => void;
}>;

const useStyles = createUseStyles({
  root: {
    width: '100%',
    borderCollapse: 'collapse',
    border: 'none',
    backgroundColor: theme.palette.common.white
  },
  thead: {
    backgroundColor: theme.palette.common.white,
    '& tr': {
      borderBottom: `1px solid ${theme.palette.grey[400]}`
    },
    '& tr > td': {
      padding: 10,
      whiteSpace: 'nowrap'
    },
    '& tr td:first-child': {
      paddingLeft: 25
    },
    '& tr td:last-child': {
      paddingLeft: 25
    }
  },
  tbody: {
    '& tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[50]
    },
    '& tr': {
      cursor: 'pointer',
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
      fontSize: 20,
      height: 80
    },
    '& tr > td': {
      padding: 10
    },
    '& tr > td.numeric': {
      textAlign: 'right'
    },
    '& tr > td:first-child': {
      paddingLeft: 25
    },
    '& tr > td:last-child': {
      paddingRight: 25
    }
  }
});

/**
 * TableData provides a convenient way to displays a set of data to a user.
 * It differs for a regular Table as it includes utility callbacks to perform common operations of tabular data.
 */
export function TableData<T>({
  className,
  renderRow,
  header,
  getUniqKey,
  data,
  onRowSelect,
  setRowClassName,
  isRowSelected
}: Props<T>): JSX.Element {
  const body = data.map((datum, idx) => (
    <tr
      key={getUniqKey(datum)}
      className={setRowClassName && setRowClassName(datum)}
      style={
        isRowSelected && isRowSelected(datum)
          ? { backgroundColor: theme.palette.primary.light }
          : undefined
      }
      onClick={onRowSelect ? () => onRowSelect(datum) : undefined}
    >
      {renderRow(datum, idx)}
    </tr>
  ));

  const classes = useStyles();

  return (
    <table className={classNames(classes.root, className)}>
      <thead className={classes.thead}>
        <tr>{header}</tr>
      </thead>
      <tbody className={classes.tbody}>{body}</tbody>
    </table>
  );
}
