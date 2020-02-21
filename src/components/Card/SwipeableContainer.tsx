import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  children: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const SwipeableContainerComp = ({ classes, children }: Props) => (
  <div className={classes.root}>{children}</div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    paddingRight: 4,
    paddingBottom: 4,
    minWidth: `calc((${510}px + ${4}px) * 2 + 1rem)`,
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export const SwipeableContainer = compose<Props, CompProps>(
  setDisplayName('SwipeableContainer'),
  injectSheet(styles)
)(SwipeableContainerComp);
