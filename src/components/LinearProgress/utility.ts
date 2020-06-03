/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { getRegularColor, getBorderColor, getDarkColor } from './colors';
import { normalize } from '../../utils';

type LinearProgressSize = 'xs' | 'md' | 'lg' | 'md60';

export type LinearProgressColor =
  | 'green'
  | 'orange'
  | 'yellow'
  | 'red'
  | 'grey'
  | 'white'
  | 'brown';

type LinearProgressContentVerticalAlign = 'center' | 'top' | 'bottom';

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
