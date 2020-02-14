import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type OuterProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

type ClassKey = 'root';

type Props = WithStyles<ClassKey> & OuterProps;

const WhiteBoxWithShadowComp = ({ classes, children, className }: Props) => (
  <div className={classNames(classes.root, className)}>{children}</div>
);

const styles: StyleSheet<ClassKey> = {
  root: {
    boxShadow: theme.shadow.xs,
    backgroundColor: theme.palette.grey.white
  }
};

export const WhiteBoxWithShadow = compose<Props, OuterProps>(
  setDisplayName('WhiteBoxWithShadow'),
  injectSheet(styles)
)(WhiteBoxWithShadowComp);
