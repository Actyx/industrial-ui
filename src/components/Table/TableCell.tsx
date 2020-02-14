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

type ClassKey = 'tableCell' | 'numeric';

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
