import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { RADIUS, CIRCUMFERENCE, calcDashoffset, renderTextValueMax4Digits } from './utility';

export enum GaugeProgressColor {
  Blue = 'blue',
  Green = 'green'
}

type CompProps = Readonly<{
  color: GaugeProgressColor;
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

const { deepSkyBlue } = theme.palette.blue;
const { green } = theme.palette.signal;
const { light200, dark400 } = theme.palette.grey;

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    transform: 'rotate(-90deg)'
  },
  track: {
    stroke: light200
  },
  blue: {
    stroke: deepSkyBlue
  },
  green: {
    stroke: green
  },
  text: {
    transform: 'rotate(90deg)',
    fill: dark400,
    fontWeight: 'bold',
    textAnchor: 'middle',
    dominantBaseline: 'middle',
    fontSize: 36
  }
};

export const GaugeProgress = compose<Props, CompProps>(
  setDisplayName('GaugeProgress'),
  injectSheet(styles)
)(GaugeProgressComp);
