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
      borderBottom: '1px solid #d6d6d6'
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
      backgroundColor: '#fafafa'
    },
    '& tr': {
      cursor: 'pointer',
      borderBottom: '1px solid #d6d6d6',
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

export function Grid<T>({
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
