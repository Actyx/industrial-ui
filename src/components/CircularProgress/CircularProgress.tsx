import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

const SIZE_MD = 60;
const SIZE_SM = 40;
const COLOR_TRACK = theme.palette.grey.neutral100;
const COLOR_INDICATOR = theme.palette.primary.main;

export type CircularProgressVariant = 'sm' | 'md';

type CompProps = Readonly<{
  variant: CircularProgressVariant;
  colorIndicator?: string;
  colorTrack?: string;
  className?: string;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const CircularProgressComp = ({
  classes,
  variant,
  colorIndicator,
  colorTrack,
  className
}: Props) => (
  <div
    style={{
      borderColor: colorTrack,
      borderTopColor: colorIndicator
    }}
    className={classNames(classes.root, variant === 'md' ? classes.md : classes.sm, className)}
  />
);

type ClassKey = 'root' | 'md' | 'sm' | '@keyframes spin';

const styles: StyleSheet<ClassKey> = {
  root: {
    animation: 'spin 1s linear infinite'
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
