import { theme } from '../../theme';
import { BatteryIconVariant } from './BatteryIcon';

const COLOR_GREEN = theme.palette.signal.green;
const COLOR_ORANGE = theme.palette.signal.orange;
const COLOR_RED = theme.palette.signal.redBright;

const COLOR_WHITE = theme.palette.grey.white;
const COLOR_BLACK = theme.palette.grey.black;

const BASE_WIDTH = 41;

export const getColorFromLevel = (l: number) =>
  l <= 10 ? COLOR_RED : l <= 20 ? COLOR_ORANGE : COLOR_GREEN;

export const getWidthFromLevel = (l: number) => Math.round((BASE_WIDTH * l) / 100);

export const getColorFromVariant = (t: BatteryIconVariant) =>
  t === 'light' ? COLOR_WHITE : COLOR_BLACK;
