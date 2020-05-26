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
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Typography } from '../Typography';
import { getTextColor } from './colors';
import { createStyleTrack, createStyleIndicator, getContentStyle } from './utility';

export type LinearProgressSize = 'xs' | 'md' | 'lg' | 'md60';

export type LinearProgressColor =
  | 'green'
  | 'orange'
  | 'yellow'
  | 'red'
  | 'grey'
  | 'white'
  | 'brown';

export type LinearProgressContentVerticalAlign = 'center' | 'top' | 'bottom';

type CompProps = Readonly<{
  className?: string;
  size: LinearProgressSize;
  color: LinearProgressColor;
  value: number;
  disabled?: boolean;
  contentRight?: React.ReactNode;
  contentLeft?: React.ReactNode;
  contentCenter?: React.ReactNode;
  border?: boolean;
  contentVerticalAlign?: LinearProgressContentVerticalAlign;
  onSelect?: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const VALUE_MIN = 0;
const VALUE_MAX = 100;

const LinearProgressComp = ({
  classes,
  className,
  size,
  color,
  value,
  contentCenter,
  contentRight,
  contentLeft,
  disabled,
  border,
  contentVerticalAlign,
  onSelect
}: Props) => {
  const typographyVariant = size === 'lg' ? 'distance' : 'subtext';
  return (
    <div
      className={classNames(classes.root, classes[size], className)}
      style={createStyleTrack(color, disabled, border)}
      onClick={onSelect}
    >
      <div
        className={classes.indicator}
        style={createStyleIndicator(color, value, VALUE_MIN, VALUE_MAX, disabled)}
      />
      <div style={getContentStyle(size, contentVerticalAlign)}>
        {contentCenter && (
          <Typography
            className={classes.message}
            color={getTextColor(color)}
            variant={typographyVariant}
            bold
          >
            {contentCenter}
          </Typography>
        )}
        <div className={classes.content}>
          <Typography color={getTextColor(color)} variant={typographyVariant} bold>
            {contentLeft}
          </Typography>
          <Typography color={getTextColor(color)} variant={typographyVariant} bold>
            {contentRight}
          </Typography>
        </div>
      </div>
    </div>
  );
};

type ClassKey = 'root' | 'xs' | 'md' | 'md60' | 'lg' | 'indicator' | 'message' | 'content';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden'
  },
  xs: {
    width: '100%',
    height: 24
  },
  md: {
    width: '100%',
    height: 40
  },
  md60: {
    width: '100%',
    height: 60
  },
  lg: {
    width: '100%',
    height: 80
  },
  indicator: {
    height: '100%'
  },
  message: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16
  }
};

export const LinearProgress = compose<Props, CompProps>(
  setDisplayName('LinearProgress'),
  injectSheet(styles)
)(LinearProgressComp);
