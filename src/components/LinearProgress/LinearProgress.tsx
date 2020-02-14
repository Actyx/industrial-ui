import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Typography } from '../Typography';
import { getBorderColor, getDarkColor, getRegularColor, getTextColor } from './colors';

export type LinearProgressColor =
  | 'green'
  | 'orange'
  | 'yellow'
  | 'red'
  | 'grey'
  | 'white'
  | 'brown';

const VALUE_MIN = 0;
const VALUE_MAX = 100;

export type LinearProgressSize = 'xs' | 'md' | 'lg' | 'md60';

type ContentVerticalAlign = 'center' | 'top' | 'bottom';

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
  contentVerticalAlign?: ContentVerticalAlign;
  onSelect?: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

export const normalize = (value: number, min: number, max: number) =>
  Math.min(Math.max(min, value), max);

const getContentVerticalAlignTopOffset = (
  offset: number,
  contentVerticalAlign?: ContentVerticalAlign
) =>
  contentVerticalAlign === 'center' || contentVerticalAlign === undefined
    ? 0
    : contentVerticalAlign === 'bottom'
    ? offset
    : -offset;

const getContentStyle = (
  size: LinearProgressSize,
  contentVerticalAlign?: ContentVerticalAlign
): React.CSSProperties => {
  const common: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  switch (size) {
    case 'xs':
      return {
        ...common,
        top: getContentVerticalAlignTopOffset(0, contentVerticalAlign)
      };
    case 'md':
      return {
        ...common,
        top: getContentVerticalAlignTopOffset(4, contentVerticalAlign)
      };
    case 'md60':
      return {
        ...common,
        top: getContentVerticalAlignTopOffset(8, contentVerticalAlign)
      };
    case 'lg':
      return {
        ...common,
        top: getContentVerticalAlignTopOffset(16, contentVerticalAlign)
      };
  }
};

export const createStyleIndicator = (
  color: LinearProgressColor,
  value: number,
  valueMin: number,
  valueMax: number,
  disabled = false
) => ({
  backgroundColor: getRegularColor(color, disabled),
  width: `${normalize(value, valueMin, valueMax)}%`
});

export const createStyleTrack = (color: LinearProgressColor, disabled = false, border = false) => ({
  border: border ? `2px solid ${getBorderColor(color)}` : 'none',
  backgroundColor: getDarkColor(color, disabled)
});

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
