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
import { Content } from './Content';
import { StatusComponent } from './Status';
import { TimelineStatusType } from './Timeline';

export type TimelineEventContent = Readonly<{
  title: string;
  dateFormatted: React.ReactNode;
  description?: string;
}>;

type CompProps = Readonly<{
  domId: string;
  status: TimelineStatusType;
  content: TimelineEventContent;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TimelineEventComp = ({ classes, domId, status, content }: Props) => (
  <div className={classes.root} id={domId}>
    <div className={classes.status}>
      <StatusComponent {...status} />
    </div>
    <div className={classes.content}>
      <Content {...content} />
    </div>
  </div>
);

type ClassKey = 'root' | 'status' | 'content';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'relative'
  },
  status: {
    position: 'absolute',
    height: '100%',
    width: 20
  },
  content: {
    marginLeft: 32
  }
};

export const TimelineEvent = compose<Props, CompProps>(
  setDisplayName('TimelineEvent'),
  injectSheet(styles)
)(TimelineEventComp);
