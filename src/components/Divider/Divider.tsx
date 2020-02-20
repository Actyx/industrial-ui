import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  className?: string;
}>;

type ClassKey = 'root';

type Props = WithStyles<ClassKey> & CompProps;

const DividerComp = ({ classes, className }: Props) => (
  <hr className={classNames(classes.root, className)} />
);

const styles: StyleSheet<ClassKey> = {
  root: {
    border: 0,
    height: 1,
    background: theme.palette.grey[400],
    marginTop: 10,
    marginBottom: 10
  }
};

export const Divider = compose<Props, CompProps>(
  setDisplayName('Divider'),
  injectSheet(styles)
)(DividerComp);
