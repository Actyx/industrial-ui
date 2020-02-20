import {
  LinearProgressContentVerticalAlign,
  LinearProgressSize,
  LinearProgressColor
} from './LinearProgress';
import { getRegularColor, getBorderColor, getDarkColor } from './colors';
import { normalize } from '../../utils';

export const getContentVerticalAlignTopOffset = (
  offset: number,
  contentVerticalAlign?: LinearProgressContentVerticalAlign
) =>
  contentVerticalAlign === 'center' || contentVerticalAlign === undefined
    ? 0
    : contentVerticalAlign === 'bottom'
    ? offset
    : -offset;

export const getContentStyle = (
  size: LinearProgressSize,
  contentVerticalAlign?: LinearProgressContentVerticalAlign
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
