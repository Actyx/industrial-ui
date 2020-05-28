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
import { Scrim } from '../Scrim';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  className?: string;
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const FluidDialogComp = ({ classes, className, header, content, footer, onClose }: Props) => (
  <div className={classes.root}>
    <Scrim open onClose={onClose} />
    <div className={classNames(classes.container, className)}>
      <div>{header}</div>
      <div className={classes.content}>{content}</div>
      <div>{footer}</div>
    </div>
  </div>
);

type ClassKey = 'root' | 'container' | 'content';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.fluid
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: 24,
    maxHeight: 'calc(100% - 40px)',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadow.md
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
    position: 'relative'
  }
};

export const FluidDialog = compose<Props, CompProps>(
  setDisplayName('FluidDialog'),
  injectSheet(styles)
)(FluidDialogComp);
