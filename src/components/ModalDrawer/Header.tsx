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
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  main: React.ReactNode;
  icon?: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const HeaderComp = ({ classes, main, icon }: Props) => (
  <div className={classes.root}>
    <div className={classes.main}>
      <Typography variant="standard" bold>
        {main}
      </Typography>
    </div>
    {icon}
  </div>
);

type ClassKey = 'root' | 'main';

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
    backgroundColor: theme.palette.grey[400]
  },
  main: {
    paddingLeft: 24,
    paddingRight: 24
  }
};

export const Header = compose<Props, CompProps>(
  setDisplayName('Header'),
  injectSheet(styles)
)(HeaderComp);
