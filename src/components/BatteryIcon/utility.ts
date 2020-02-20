import { theme } from '../../theme';
import { BatteryIconVariant } from './BatteryIcon';

const COLOR_GREEN = theme.palette.success.light;
const COLOR_ORANGE = theme.palette.warning.main;
const COLOR_RED = theme.palette.error.light;

const COLOR_WHITE = theme.palette.primary.contrastText;
const COLOR_BLACK = theme.palette.common.black;

const BASE_WIDTH = 41;

export const getColorFromLevel = (l: number) =>
  l <= 10 ? COLOR_RED : l <= 20 ? COLOR_ORANGE : COLOR_GREEN;

export const getWidthFromLevel = (l: number) => Math.round((BASE_WIDTH * l) / 100);

export const getColorFromVariant = (t: BatteryIconVariant) =>
  t === 'light' ? COLOR_WHITE : COLOR_BLACK;
