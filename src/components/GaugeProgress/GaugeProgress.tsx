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
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { RADIUS, CIRCUMFERENCE, calcDashoffset, renderTextValueMax4Digits } from './utility';

type CompProps = Readonly<{
  color: 'blue' | 'green';
  value: number;
  width?: string;
  height?: string;
  lineCap?: 'butt' | 'round';
}>;

type Props = WithStyles<ClassKey> & CompProps;

const GaugeProgressComp = ({
  classes,
  color,
  value,
  width = '120px',
  height = '120px',
  lineCap = 'round'
}: Props) => (
  <svg className={classes.root} width={width} height={height} viewBox="0 0 120 120">
    <g>
      <circle className={classes.track} cx="60" cy="60" r={RADIUS} fill="none" strokeWidth="12" />
      <circle
        className={classes[color]}
        cx="60"
        cy="60"
        r={RADIUS}
        fill="none"
        strokeWidth="12"
        style={{
          strokeDasharray: CIRCUMFERENCE,
          strokeDashoffset: calcDashoffset(value)
        }}
        strokeLinecap={lineCap}
      />
      <text className={classes.text} x="50%" y="-48%">
        {renderTextValueMax4Digits(value)}
      </text>
    </g>
  </svg>
);

type ClassKey = 'root' | 'blue' | 'green' | 'track' | 'text';

const { main } = theme.palette.primary;
const { 200: light200, 900: dark400 } = theme.palette.grey;

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    transform: 'rotate(-90deg)'
  },
  track: {
    stroke: light200
  },
  blue: {
    stroke: main
  },
  green: {
    stroke: theme.palette.success.light
  },
  text: {
    transform: 'rotate(90deg)',
    fill: dark400,
    fontWeight: theme.typography.fontWeightBold,
    textAnchor: 'middle',
    dominantBaseline: 'middle',
    fontSize: 36
  }
};

export const GaugeProgress = compose<Props, CompProps>(
  setDisplayName('GaugeProgress'),
  injectSheet(styles)
)(GaugeProgressComp);
