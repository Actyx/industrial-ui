import { theme } from '../../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../../utils/jss';

type Variant = 'light' | 'dark';

type OuterProps = Readonly<{
  variant: Variant;
  className?: string;
  children?: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const HeaderContainerComp = ({ classes, className, variant, children }: Props) => (
  <div className={classNames(classes.root, className, classes[variant])}>{children}</div>
);

type ClassKey = 'root' | 'dark' | 'light';

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 80,
    width: '100%'
  },
  dark: {
    backgroundColor: theme.palette.blue.dark,
    color: theme.palette.grey.white
  },
  light: {
    backgroundColor: theme.palette.grey.white,
    color: theme.palette.blue.dark
  }
};

export const HeaderContainer = compose<Props, OuterProps>(
  setDisplayName('HeaderContainer'),
  injectSheet(styles)
)(HeaderContainerComp);
