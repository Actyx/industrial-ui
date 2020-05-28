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

export type ToolbarVariant = 'light' | 'dark';

type CompProps = Readonly<{
  variant: ToolbarVariant;
  className?: string;
  children: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ToolbarComp = ({ classes, className, variant, children }: Props) => (
  <div className={classNames(classes.root, className, classes[variant])}>{children}</div>
);

type ClassKey = 'root' | 'dark' | 'light';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 80,
    width: '100%',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadow.sm,
    zIndex: 1000
  },
  dark: {
    backgroundColor: theme.palette.primary.dark
  },
  light: {
    backgroundColor: theme.palette.common.white
  }
};

export const Toolbar = compose<Props, CompProps>(
  setDisplayName('Toolbar'),
  injectSheet(styles)
)(ToolbarComp);
