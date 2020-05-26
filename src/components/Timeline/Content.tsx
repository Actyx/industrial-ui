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
import { Typography } from '../Typography';
import { TimelineEventContent } from './TimelineEvent';

type CompProps = Readonly<TimelineEventContent>;

type Props = WithStyles<ClassKey> & CompProps;

const ContentComp = ({ classes, title, dateFormatted, description }: Props) => (
  <div className={classes.root}>
    <div>
      <Typography variant="distance" bold className={classes.description}>
        {title}
      </Typography>
    </div>
    <div>
      <Typography variant="standard" bold className={classes.description}>
        {dateFormatted}
      </Typography>
    </div>
    <div>
      {description && (
        <Typography variant="standard" className={classes.description}>
          {description}
        </Typography>
      )}
    </div>
  </div>
);

type ClassKey = 'root' | 'description';

const styles: StyleSheet<ClassKey> = {
  root: {
    '& div:nth-child(1)': {
      marginBottom: 4
    },
    '& div:nth-child(2)': {
      marginBottom: 8
    },
    '& div:nth-child(3)': {
      marginBottom: 16
    }
  },
  description: {
    wordWrap: 'break-word'
  }
};

export const Content = compose<Props, CompProps>(
  setDisplayName('Content'),
  injectSheet(styles)
)(ContentComp);
