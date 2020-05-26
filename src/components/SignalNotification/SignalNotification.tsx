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
import { MUIcon } from '../MUIcon';
import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Divider } from '../Divider';

type CompProps = Readonly<{
  className?: string;
  icon: string;
  text: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const SignalNotificationComp = ({ classes, className, icon, text }: Props) => (
  <div className={classNames(classes.root, className)}>
    <Divider className={classes.divider} />
    <div className={classes.content}>
      <div className={classes.icon}>
        <MUIcon type={icon} color={theme.palette.error.main} fontSize={93} />
      </div>
      <div className={classes.text}>
        <Typography variant="distance">{text}</Typography>
      </div>
    </div>
    <Divider className={classes.divider} />
  </div>
);

type ClassKey = 'root' | 'divider' | 'content' | 'icon' | 'text';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    width: '100%',
    '& hr:first-child': {
      marginBottom: 15
    },
    '& hr:last-child': {
      marginTop: 15
    }
  },
  divider: {
    margin: 0
  },
  content: {
    display: 'flex'
  },
  icon: {
    marginRight: 15,
    marginLeft: -15
  },
  text: {
    display: 'flex',
    alignItems: 'center'
  }
};

export const SignalNotification = compose<Props, CompProps>(
  setDisplayName('SignalNotification'),
  injectSheet(styles)
)(SignalNotificationComp);
