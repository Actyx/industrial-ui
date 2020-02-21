import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  children: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TableBodyComp = ({ classes, children }: Props) => (
  <tbody className={classes.tableBody}>{children}</tbody>
);

type ClassKey = 'tableBody';

const styles: StyleSheet<ClassKey, CompProps> = {
  tableBody: {}
};

export const TableBody = compose<Props, CompProps>(
  setDisplayName('TableBody'),
  injectSheet(styles)
)(TableBodyComp);
