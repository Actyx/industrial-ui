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
import { createStyleTrack, createStyleIndicator } from './utility';

type CompProps = Readonly<{
  className?: string;
  color: 'green' | 'orange' | 'yellow' | 'red' | 'grey' | 'white' | 'brown';
  value: number;
  disabled?: boolean;
  border?: boolean;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const VALUE_MIN = 0;
const VALUE_MAX = 100;

const LinearProgressSimpleComp = ({ classes, color, value, disabled, border }: Props) => (
  <div className={classes.root} style={createStyleTrack(color, disabled, border)}>
    <div
      className={classes.indicator}
      style={createStyleIndicator(color, value, VALUE_MIN, VALUE_MAX, disabled)}
    />
  </div>
);

type ClassKey = 'root' | 'indicator';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    height: 40
  },
  indicator: {
    height: '100%'
  }
};

export const LinearProgressSimple = compose<Props, CompProps>(
  setDisplayName('LinearProgressSimple'),
  injectSheet(styles)
)(LinearProgressSimpleComp);
