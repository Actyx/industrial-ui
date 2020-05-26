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

type CompProps = Readonly<{
  children: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TableBodyComp = ({ classes, children }: Props) => (
  <tbody className={classes.tableBody}>{children}</tbody>
);

type ClassKey = 'tableBody';

const styles: StyleSheet<ClassKey, CompProps> = {
  tableBody: {}
};

export const TableBody = compose<Props, CompProps>(
  setDisplayName('TableBody'),
  injectSheet(styles)
)(TableBodyComp);
