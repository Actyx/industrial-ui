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

const TableHeaderComp = ({ classes, children }: Props) => (
  <thead className={classes.thead}>{children}</thead>
);

type ClassKey = 'thead';

const styles: StyleSheet<ClassKey> = {
  thead: {
    '& tr': {
      height: 40
    }
  }
};

export const TableHeader = compose<Props, CompProps>(
  setDisplayName('TableHeader'),
  injectSheet(styles)
)(TableHeaderComp);
