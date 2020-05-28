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

type CompProps = Readonly<{
  className?: string;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const DividerComp = ({ classes, className }: Props) => (
  <hr className={classNames(classes.root, className)} />
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    border: 0,
    height: 1,
    background: theme.palette.grey[400],
    marginTop: 10,
    marginBottom: 10
  }
};

export const Divider = compose<Props, CompProps>(
  setDisplayName('Divider'),
  injectSheet(styles)
)(DividerComp);
