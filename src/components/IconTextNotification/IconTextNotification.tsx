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
import { MUIcon } from '../MUIcon';
import * as React from 'react';
import { Typography } from '../Typography';

type Props = Readonly<{
  icon: string;
  text: React.ReactNode;
  color: string;
  smallSize?: boolean;
  counter?: number;
}>;

export const IconTextNotification = ({ icon, text, color, smallSize = false, counter }: Props) => (
  <div className="d-flex align-items-center">
    <MUIcon type={icon} fontSize={smallSize ? 28 : 37} color={color} className="mr-2" />
    <Typography
      variant={smallSize ? 'standard' : 'distance'}
      color={color}
      textTransform="uppercase"
      bold
    >
      {text}
      {counter && ` x${counter}`}
    </Typography>
  </div>
);
