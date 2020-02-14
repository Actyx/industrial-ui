import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export enum MeterColor {
  Blue = 'blue',
  Green = 'green'
}

type OuterProps = Readonly<{
  color: MeterColor.Blue | MeterColor.Green;
  value: number;
  width?: string;
  height?: string;
  lineCap?: 'butt' | 'round';
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const calcDashoffset = (value: number) => (value <= 100 ? CIRCUMFERENCE * (1 - value / 100) : 0);

const renderTextValue = (limitDigits: number) => (value: number) => {
  const rounded = Math.ceil(value);
  const lenRounded = String(rounded).length;
  return lenRounded <= limitDigits ? `${rounded}%` : `>100%`;
};

export const renderTextValueMax4Digits = renderTextValue(4);

const CircularProgressMeterComp = ({
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

const { deepSkyBlue } = theme.palette.actionHighlight;
const { green } = theme.palette.signal;
const { light200, dark400 } = theme.palette.grey;

const styles: StyleSheet<ClassKey, OuterProps> = {
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

export const CircularProgressMeter = compose<Props, OuterProps>(
  setDisplayName('CircularProgressMeter'),
  injectSheet(styles)
)(CircularProgressMeterComp);
