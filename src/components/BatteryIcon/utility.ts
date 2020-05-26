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
