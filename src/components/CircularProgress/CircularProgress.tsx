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

export type CircularProgressSize = 'sm' | 'md';

type CompProps = Readonly<{
  size: 'sm' | 'md';
  colorIndicator?: string;
  colorTrack?: string;
  className?: string;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const SIZE_MD = 60;
const SIZE_SM = 40;
const COLOR_TRACK = theme.palette.grey[400];
const COLOR_INDICATOR = theme.palette.primary.main;

const CircularProgressComp = ({ classes, size, colorIndicator, colorTrack, className }: Props) => (
  <div
    style={{
      borderColor: colorTrack,
      borderTopColor: colorIndicator
    }}
    className={classNames(classes.root, size === 'md' ? classes.md : classes.sm, className)}
  />
);

type ClassKey = 'root' | 'md' | 'sm' | '@keyframes spin';

const styles: StyleSheet<ClassKey> = {
  root: {
    animation: '$spin 1s linear infinite'
  },
  md: {
    border: `${SIZE_MD / 10}px solid ${COLOR_TRACK}`,
    borderTop: `${SIZE_MD / 10}px solid ${COLOR_INDICATOR}`,
    borderRadius: '50%',
    width: SIZE_MD,
    height: SIZE_MD
  },
  sm: {
    border: `${SIZE_SM / 10}px solid ${COLOR_TRACK}`,
    borderTop: `${SIZE_SM / 10}px solid ${COLOR_INDICATOR}`,
    borderRadius: '50%',
    width: SIZE_SM,
    height: SIZE_SM
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
};

export const CircularProgress = compose<Props, CompProps>(
  setDisplayName('CircularProgress'),
  injectSheet(styles)
)(CircularProgressComp);
