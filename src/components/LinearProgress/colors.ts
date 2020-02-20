import { theme } from '../../theme';
import { LinearProgressColor } from './LinearProgress';

const dark: { [color: string]: string } = {
  green: theme.palette.signal.greenDark,
  orange: theme.palette.signal.orangeDark,
  yellow: theme.palette.signal.yellowDark,
  red: theme.palette.signal.redDark,
  grey: theme.palette.grey.neutral300,
  white: theme.palette.common.white,
  brown: theme.palette.signal.brownDark
};

const regular: { [color: string]: string } = {
  green: theme.palette.signal.green,
  orange: theme.palette.signal.orange,
  yellow: theme.palette.signal.yellow,
  red: theme.palette.signal.red,
  grey: theme.palette.grey.neutral100,
  white: theme.palette.grey[50],
  brown: theme.palette.signal.brown
};

const textColorMap: { [color: string]: string } = {
  green: theme.palette.common.white,
  orange: theme.palette.common.white,
  yellow: theme.palette.common.white,
  red: theme.palette.common.white,
  grey: theme.palette.common.white,
  white: theme.palette.grey.dark400,
  brown: theme.palette.signal.brown
};

const borderColorMap: { [color: string]: string } = {
  green: theme.palette.signal.green,
  orange: theme.palette.signal.orange,
  yellow: theme.palette.signal.yellow,
  red: theme.palette.signal.red,
  grey: theme.palette.grey.neutral100,
  white: theme.palette.grey.neutral100,
  brown: theme.palette.signal.brown
};

export const getRegularColor = (color: LinearProgressColor, disabled?: boolean) => {
  const c = regular[color];
  return disabled ? theme.utils.rgba(c, 0.5) : c;
};

export const getDarkColor = (color: LinearProgressColor, disabled?: boolean) => {
  const c = dark[color];
  return disabled ? theme.utils.rgba(c, 0.5) : c;
};

export const getTextColor = (color: LinearProgressColor) => textColorMap[color];

export const getBorderColor = (color: LinearProgressColor) => borderColorMap[color];
