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

export type CardColor = 'neutral' | 'red';

type CompProps = Readonly<{
  color: 'neutral' | 'red';
  raised: boolean;
  header?: React.ReactNode;
  content: React.ReactNode;
  action?: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const CardComp = ({ classes, raised, color, header, content, action }: Props) => (
  <div
    className={classNames(
      classes.root,
      raised ? classes.raised : undefined,
      classes.md,
      classes[color]
    )}
  >
    {header && <div className={classes.header}>{header}</div>}
    <div className={classes.content}>{content}</div>
    {action && <div className={classes.action}>{action}</div>}
  </div>
);

const CARD_WIDTH = 510;

type ClassKey = 'root' | 'raised' | 'md' | 'neutral' | 'red' | 'header' | 'content' | 'action';

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  md: {
    width: CARD_WIDTH,
    height: 430
  },
  raised: {
    boxShadow: theme.shadow.sm
  },
  neutral: {
    backgroundColor: theme.palette.grey[50]
  },
  red: {
    backgroundColor: theme.palette.error.light
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    minHeight: 60,
    borderBottom: `${1}px solid ${theme.palette.grey[700]}`
  },
  content: {
    overflow: 'auto',
    flexGrow: 1
  },
  action: {
    width: '100%',
    minHeight: 80
  }
};

/**
 * Card contains content and actions about a single topic.
 * It should be easy to scan for related and actionable information.
 */
export const Card = compose<Props, CompProps>(
  setDisplayName('Card'),
  injectSheet(styles)
)(CardComp);
