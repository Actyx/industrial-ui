import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type SignalCircularColor = 'red' | 'orange' | 'yellow' | 'green' | 'lightGrey' | 'darkGrey';

export type SignalCircularSize = 'xs' | 'sm' | 'md';

type CompProps = Readonly<{
  className?: string;
  color: SignalCircularColor;
  size: SignalCircularSize;
}>;

type ClassKey =
  | 'root'
  | 'xs'
  | 'sm'
  | 'md'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'lightGrey'
  | 'darkGrey';

type Props = WithStyles<ClassKey> & CompProps;

const SignalCircularComp = ({ className, classes, color, size }: Props) => (
  <div className={classNames(classes.root, classes[color], classes[size], className)} />
);

const styles: StyleSheet<ClassKey> = {
  root: {},
  xs: {
    width: 16,
    height: 16,
    borderRadius: 8
  },
  sm: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  md: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  red: {
    backgroundColor: theme.palette.error.main
  },
  orange: {
    backgroundColor: theme.palette.warning.main
  },
  yellow: {
    backgroundColor: theme.palette.prewarning.dark
  },
  green: {
    backgroundColor: theme.palette.success.main
  },
  lightGrey: {
    backgroundColor: theme.palette.grey[400]
  },
  darkGrey: {
    backgroundColor: theme.palette.grey[700]
  }
};

export const SignalCircular = compose<Props, CompProps>(
  setDisplayName('SignalCircular'),
  injectSheet(styles)
)(SignalCircularComp);
