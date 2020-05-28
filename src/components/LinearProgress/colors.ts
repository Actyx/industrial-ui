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
import { LinearProgressColor } from './LinearProgress';

const dark: { [color: string]: string } = {
  green: theme.palette.success.main,
  orange: theme.palette.warning.dark,
  yellow: theme.palette.acknowledge.dark,
  red: theme.palette.error.main,
  grey: theme.palette.grey[500],
  white: theme.palette.common.white,
  brown: theme.palette.support.dark
};

const regular: { [color: string]: string } = {
  green: theme.palette.success.light,
  orange: theme.palette.warning.main,
  yellow: theme.palette.acknowledge.main,
  red: theme.palette.error.main,
  grey: theme.palette.grey[400],
  white: theme.palette.grey[50],
  brown: theme.palette.support.main
};

const textColorMap: { [color: string]: string } = {
  green: theme.palette.common.white,
  orange: theme.palette.common.white,
  yellow: theme.palette.common.white,
  red: theme.palette.common.white,
  grey: theme.palette.common.white,
  white: theme.palette.grey[900],
  brown: theme.palette.common.white
};

const borderColorMap: { [color: string]: string } = {
  green: theme.palette.success.light,
  orange: theme.palette.warning.main,
  yellow: theme.palette.acknowledge.main,
  red: theme.palette.error.main,
  grey: theme.palette.grey[400],
  white: theme.palette.grey[400], // TODO check colors here
  brown: theme.palette.support.main
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
