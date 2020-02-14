import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { Typography } from '../Typography';

const COLOR_GREEN = theme.palette.signal.green;
const COLOR_ORANGE = theme.palette.signal.orange;
const COLOR_RED = theme.palette.signal.redBright;

const COLOR_WHITE = theme.palette.grey.white;
const COLOR_BLACK = theme.palette.grey.black;

const BASE_WIDTH = 41;

type Variant = 'light' | 'dark';

type Props = Readonly<{
  className?: string;
  level: number;
  charging?: boolean;
  variant?: Variant;
  counter?: boolean;
}>;

export const getColorFromLevel = (l: number) =>
  l <= 10 ? COLOR_RED : l <= 20 ? COLOR_ORANGE : COLOR_GREEN;

export const getWidthFromLevel = (l: number) => Math.round((BASE_WIDTH * l) / 100);

export const getColorFromVariant = (t: Variant) => (t === 'light' ? COLOR_WHITE : COLOR_BLACK);

const BatteryIconComp = ({ className, level, variant = 'light', counter, charging }: Props) => {
  const levelRounded = Math.round(level);
  return (
    <span className={classNames(className)}>
      {counter && (
        <Typography
          className="mr-2"
          variant="subtext"
          color={getColorFromVariant(variant)}
          semiBold
        >
          {levelRounded} %
        </Typography>
      )}
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="28" viewBox="0 0 56 28">
        <rect
          x="4"
          y="3.83"
          height="20.5"
          width={getWidthFromLevel(levelRounded)}
          style={{ fill: getColorFromLevel(levelRounded) }}
        />
        {charging && (
          <polygon
            fill={getColorFromVariant(variant)}
            points="25.76 13.03 25.76 8.56 25.76 6.22 25.7 6.22 24.46 8.56 20.73 15.54 23.25 15.54 23.25 20.24 23.25 22.45 24.42 20.24 28.27 13.03 25.76 13.03"
          />
        )}
        <path
          d="M49,28V19.5h7V8.5H49V0H0V28ZM4,4H45V24H4Z"
          style={{ fill: getColorFromVariant(variant) }}
        />
      </svg>
    </span>
  );
};

export const BatteryIcon = compose<Props, Props>(setDisplayName('BatteryIcon'))(BatteryIconComp);
