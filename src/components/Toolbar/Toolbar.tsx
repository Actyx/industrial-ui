import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type Variant = 'light' | 'dark';

type OuterProps = Readonly<{
  variant: Variant;
  className?: string;
  children: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const ToolbarComp = ({ classes, className, variant, children }: Props) => (
  <div className={classNames(classes.root, className, classes[variant])}>{children}</div>
);

type ClassKey = 'root' | 'dark' | 'light';

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 80,
    width: '100%',
    backgroundColor: theme.color.pureWhite,
    boxShadow: theme.shadow.sm,
    zIndex: 1000
  },
  dark: {
    backgroundColor: theme.palette.blue.dark
  },
  light: {
    backgroundColor: theme.palette.grey.white
  }
};

export const Toolbar = compose<Props, OuterProps>(
  setDisplayName('Toolbar'),
  injectSheet(styles)
)(ToolbarComp);
