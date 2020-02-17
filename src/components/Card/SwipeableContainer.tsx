import { theme } from '../../theme';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { CARD_WIDTH } from './Card';
import { WithStyles, StyleSheet } from '../../utils/jss';

type OuterProps = Readonly<{
  children: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const SwipeableContainerComp = ({ classes, children }: Props) => (
  <div className={classes.root}>{children}</div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    paddingRight: theme.shadowWidth.sm,
    paddingBottom: theme.shadowWidth.sm,
    minWidth: `calc((${CARD_WIDTH}px + ${theme.shadowWidth.sm}px) * 2 + 1rem)`,
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export const SwipeableContainer = compose<Props, OuterProps>(
  setDisplayName('SwipeableContainer'),
  injectSheet(styles)
)(SwipeableContainerComp);
