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
import { PaginationDot } from './PaginationDot';
import { range } from '../../utils';

type CompProps = Readonly<{
  dots: number;
  index: number;
  onChangeIndex: (index: number) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const PaginationDotsComp = ({ classes, dots, index, onChangeIndex }: Props) => (
  <div className={classes.root}>
    {range(0, dots).map(x => (
      <PaginationDot key={x} active={x === index} onClick={() => onChangeIndex(x)} />
    ))}
  </div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    display: 'flex',
    flexDirection: 'row'
  }
};

export const PaginationDots = compose<Props, CompProps>(
  setDisplayName('PaginationDots'),
  injectSheet(styles)
)(PaginationDotsComp);
