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
/* eslint-disable prefer-const */
import * as React from 'react';
import { theme } from '../../theme';

const SIZE = 48;

type Props = Readonly<{
  networkStatus: 'connected' | 'partiallyConnected' | 'disconnected';
  variant: 'light' | 'dark';
  color?: string;
  onSelect?: () => void;
}>;

const renderIcons = (
  networkStatus: 'connected' | 'partiallyConnected' | 'disconnected',
  fillColor: string
) => {
  const icons = {
    connected: (
      <path
        fill={fillColor}
        d="M788.57,548.57A169.13,169.13,0,0,0,692.68,578L548.57,446.25v-2.14L690,311.25c28.12,19.55,61.88,31.61,98.57,31.61,94.29,0,171.43-77.15,171.43-171.43S882.86,0,788.57,0,617.14,77.14,617.14,171.43c0,32.95,9.91,63.48,26,89.73L483.75,411.43H339.38c-16.08-77.95-85.45-137.14-167.95-137.14C77.14,274.29,0,351.43,0,445.71S77.14,617.14,171.43,617.14c82.5,0,151.87-59.19,168-137.14H483.75L645,627.32A169.26,169.26,0,0,0,617.14,720c0,94.29,77.15,171.43,171.43,171.43S960,814.29,960,720,882.86,548.57,788.57,548.57Z"
      />
    ),
    partiallyConnected: (
      <path
        fill={fillColor}
        d="M617.14,171.43c0,32.95,9.91,63.48,26,89.73L483.75,411.43H339.38c-16.08-77.95-85.45-137.14-167.95-137.14C77.14,274.29,0,351.43,0,445.71S77.14,617.14,171.43,617.14c82.5,0,151.87-59.19,168-137.14H483.75L645,627.32A169.26,169.26,0,0,0,617.14,720c0,94.29,77.15,171.43,171.43,171.43S960,814.29,960,720,882.86,548.57,788.57,548.57A169.13,169.13,0,0,0,692.68,578L548.57,446.25v-2.14L690,311.25c28.12,19.55,61.88,31.61,98.57,31.61,94.29,0,171.43-77.15,171.43-171.43S882.86,0,788.57,0,617.14,77.14,617.14,171.43Zm274.29,0A102.86,102.86,0,1,1,788.57,68.57,102.21,102.21,0,0,1,891.43,171.43Z"
      />
    ),
    disconnected: (
      <path
        fill={fillColor}
        d="M788.57,548.57A169.13,169.13,0,0,0,692.68,578L548.57,446.25v-2.14L690,311.25c28.13,19.55,61.88,31.61,98.57,31.61,94.29,0,171.43-77.15,171.43-171.43S882.86,0,788.57,0,617.14,77.14,617.14,171.43c0,32.95,9.91,63.48,26,89.73L483.75,411.43H339.38c-16.08-77.95-85.45-137.14-167.95-137.14C77.14,274.29,0,351.43,0,445.71S77.14,617.14,171.43,617.14c82.5,0,151.87-59.19,168-137.14H483.75L645,627.32A169.26,169.26,0,0,0,617.14,720c0,94.29,77.15,171.43,171.43,171.43S960,814.29,960,720,882.86,548.57,788.57,548.57Zm0-480A102.86,102.86,0,1,1,685.71,171.43,102.21,102.21,0,0,1,788.57,68.57Zm-617.14,480A102.86,102.86,0,1,1,274.29,445.71,102.21,102.21,0,0,1,171.43,548.57Z"
      />
    )
  };
  return icons[networkStatus];
};
export const NetworkStatusIcon = ({ networkStatus, variant, color, onSelect }: Props) => (
  <div onClick={onSelect}>
    <svg
      width={`${SIZE}px`}
      height={`${SIZE}px`}
      viewBox={'0 0 960 960'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderIcons(
        networkStatus,
        color
          ? color
          : variant === 'light'
          ? theme.palette.common.white
          : theme.palette.common.black
      )}
    </svg>
  </div>
);
