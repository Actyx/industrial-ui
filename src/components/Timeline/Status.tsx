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
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { TimelineArrangement, TimelineStatusType } from './Timeline';

type CompProps = Readonly<TimelineStatusType>;

type Props = WithStyles<ClassKey> & CompProps;

const lineWrapperStyles: Record<TimelineArrangement, React.CSSProperties> = {
  single: {
    height: 0
  },
  start: {
    paddingTop: 8
  },
  continue: {
    paddingTop: 0
  },
  end: {
    paddingTop: 0,
    height: 8
  }
};

const StatusComp = ({ classes, color, arrangement }: Props) => (
  <div className={classes.root}>
    <div className={classes.lineWrapper} style={lineWrapperStyles[arrangement]}>
      <div className={classes.line} style={{ backgroundColor: color }} />
    </div>
    <div className={classes.circleWrapper}>
      <div className={classes.circle} style={{ backgroundColor: color }} />
    </div>
  </div>
);

type ClassKey = 'root' | 'lineWrapper' | 'line' | 'circleWrapper' | 'circle';

const CIRCLE_SIZE = 16;

const styles: StyleSheet<ClassKey> = {
  root: {},
  lineWrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  line: {
    width: 2,
    height: '100%'
  },
  circleWrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 8
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2
  }
};

export const StatusComponent = compose<Props, CompProps>(
  setDisplayName('Status'),
  injectSheet(styles)
)(StatusComp);
