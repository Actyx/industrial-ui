import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import './grid.css';

export type Props<T> = Readonly<{
  className?: string;
  data: ReadonlyArray<T>;
  getUniqKey: (datum: T) => string;
  header: React.ReactNode;
  renderRow: (datum: T, idx: number) => React.ReactNode;
  setRowClassName?: (datum: T) => string | undefined;
  isRowSelected?: (datum: T) => boolean;
  onRowSelect?: (datum: T) => void;
}>;

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
          ? { backgroundColor: theme.palette.actionHighlight.deepSkyBlueBright }
          : undefined
      }
      onClick={onRowSelect ? () => onRowSelect(datum) : undefined}
    >
      {renderRow(datum, idx)}
    </tr>
  ));

  return (
    <table className={classNames('ax-grid', className)}>
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}
