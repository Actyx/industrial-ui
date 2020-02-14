import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  children: React.ReactNode;
}>;

type ClassKey = 'thead';

type Props = WithStyles<ClassKey> & CompProps;

const TableHeaderComp = ({ classes, children }: Props) => (
  <thead className={classes.thead}>{children}</thead>
);

const styles: StyleSheet<ClassKey> = {
  thead: {
    '& tr': {
      height: 40
    }
  }
};

export const TableHeader = compose<Props, CompProps>(
  setDisplayName('TableHeader'),
  injectSheet(styles)
)(TableHeaderComp);
