import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type OuterProps = Readonly<{
  active?: boolean;
  onClick: () => void;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const PaginationDotComp = ({ classes, active, onClick }: Props) => (
  <button className={classes.root} onClick={onClick}>
    <div
      className={classNames({
        [classes.active]: active,
        [classes.dot]: true
      })}
    />
  </button>
);

type ClassKey = 'root' | 'dot' | 'active';

const styles: StyleSheet<ClassKey> = {
  root: {
    height: 18,
    width: 18,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0
  },
  dot: {
    backgroundColor: theme.color.primaryWhite,
    height: 12,
    width: 12,
    borderRadius: 6,
    margin: 3
  },
  active: {
    backgroundColor: theme.color.primary
  }
};

export const PaginationDot = compose<Props, OuterProps>(
  setDisplayName('PaginationDot'),
  injectSheet(styles)
)(PaginationDotComp);
