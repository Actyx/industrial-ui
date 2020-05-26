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
import * as classNames from 'classnames';
import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { Typography } from '../Typography';
import { getColorFromVariant, getWidthFromLevel, getColorFromLevel } from './utility';

export type BatteryIconVariant = 'light' | 'dark';

type Props = Readonly<{
  className?: string;
  level: number;
  charging?: boolean;
  variant?: BatteryIconVariant;
  counter?: boolean;
}>;

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
