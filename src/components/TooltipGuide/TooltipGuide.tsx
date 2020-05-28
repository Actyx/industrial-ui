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
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Typography } from '../Typography';
import { MUIcon } from '../MUIcon';

type CompProps = Readonly<{
  content: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TooltipGuideComp = ({ classes, content }: Props) => (
  <div className={classes.root}>
    <div className={classes.archContainer}>
      <div className={classes.arch} />
      <div className={classNames(classes.icon, classes.neutral)}>
        <MUIcon type="info" fontSize={80} />
      </div>
    </div>
    <div className={classes.box}>
      <div className={classes.content}>
        <Typography variant="standard">{content}</Typography>
      </div>
    </div>
    <div className={classes.boxShadow} />
  </div>
);

type ClassKey =
  | 'root'
  | 'box'
  | 'boxShadow'
  | 'arch'
  | 'archContainer'
  | 'icon'
  | 'neutral'
  | 'content';

const box: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 40,
  width: 310,
  height: '100%'
};

const styles: StyleSheet<ClassKey> = {
  root: {
    width: 350,
    minHeight: 130,
    position: 'relative'
  },
  box: {
    ...box,
    backgroundColor: theme.palette.common.white
  },
  boxShadow: {
    ...box,
    boxShadow: theme.shadow.sm
  },
  archContainer: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  arch: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadow.sm
  },
  icon: {
    position: 'absolute',
    zIndex: 1
  },
  neutral: {
    color: theme.palette.grey[900]
  },
  content: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 50
  }
};

export const TooltipGuide = compose<Props, CompProps>(
  setDisplayName('TooltipGuide'),
  injectSheet(styles)
)(TooltipGuideComp);
