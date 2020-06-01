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
import * as React from 'react';
import { MUIcon } from '../MUIcon';
import { TouchRipple } from '../TouchRipple';

const SIZE = 40;

export type CheckboxColor = 'neutral' | 'primary';

export type CheckboxState = 'indeterminate' | 'checked' | 'unchecked';

type Props = Readonly<{
  state: 'indeterminate' | 'checked' | 'unchecked';
  color?: 'neutral' | 'primary';
  disabled?: boolean;
  onClick?: () => void;
}>;

export const Checkbox = ({ state, color, disabled, onClick }: Props) => {
  const iconType =
    state === 'checked'
      ? 'check_box'
      : state === 'unchecked'
      ? 'check_box_outline_blank'
      : 'indeterminate_check_box';

  return (
    <div
      style={{
        width: SIZE,
        height: SIZE,
        color: theme.utils.rgba(
          color === 'neutral' ? theme.palette.grey[900] : theme.palette.primary.main,
          disabled ? 0.5 : 1
        )
      }}
      onClick={onClick}
    >
      <TouchRipple>
        <MUIcon fontSize={SIZE} type={iconType} />
      </TouchRipple>
    </div>
  );
};
