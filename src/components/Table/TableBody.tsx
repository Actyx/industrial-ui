import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

type CompProps = Readonly<{
  children: React.ReactNode;
}>;

type ClassKey = 'tableBody';

type Props = WithStyles<ClassKey> & CompProps;

const TableBodyComp = ({ classes, children }: Props) => (
  <tbody className={classes.tableBody}>{children}</tbody>
);

const styles: StyleSheet<ClassKey> = {
  tableBody: {}
};

export const TableBody = compose<Props, CompProps>(
  setDisplayName('TableBody'),
  injectSheet(styles)
)(TableBodyComp);
