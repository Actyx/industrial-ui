import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { createStyleIndicator, createStyleTrack, LinearProgressColor } from './LinearProgress';

const VALUE_MIN = 0;
const VALUE_MAX = 100;

type CompProps = Readonly<{
  className?: string;
  color: LinearProgressColor;
  value: number;
  disabled?: boolean;
  border?: boolean;
}>;

type Props = WithStyles<ClassKey> & CompProps;

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
