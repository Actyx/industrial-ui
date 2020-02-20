import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  tabs: ReadonlyArray<React.ReactNode>;
  selected: number;
  onSelect: (tabIdx: number) => void;
  children: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TabsComp = ({ tabs, selected, onSelect, classes, children }: Props) => (
  <div className={classes.root}>
    <div className={classes.header}>
      {tabs.map((t, idx) => (
        <div
          className={classNames(classes.tab, idx === selected ? classes.active : classes.inactive)}
          key={idx}
          onClick={() => onSelect(idx)}
        >
          <Typography variant="standard" bold color="inherit" textTransform="capitalize">
            {t}
          </Typography>
        </div>
      ))}
    </div>

    <div className={classes.container}>{children}</div>
  </div>
);

type ClassKey = 'root' | 'header' | 'active' | 'inactive' | 'tab' | 'container';

const styles: StyleSheet<ClassKey> = {
  root: {
    height: '100%',
    width: '100%',
    // TODO: CSS layout rules have to be reevaluated
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    height: 50,
    minHeight: 50,
    display: 'flex',
    width: '100%'
  },
  active: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey.dark200
  },
  inactive: {
    backgroundColor: theme.palette.grey.light150,
    color: theme.palette.grey.dark100
  },
  tab: {
    cursor: 'pointer',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    height: '100%',
    width: '100%',
    position: 'relative',
    backgroundColor: 'white'
  }
};

export const Tabs = compose<Props, CompProps>(
  setDisplayName('Tabs'),
  injectSheet(styles)
)(TabsComp);
