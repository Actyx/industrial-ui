/*
 * Copyright 2020 Actyx AG
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  tabs: ReadonlyArray<React.ReactNode>;
  selected: number;
  children: React.ReactNode;
  onSelect: (tabIdx: number) => void;
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
    color: theme.palette.grey[700]
  },
  inactive: {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[600]
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
