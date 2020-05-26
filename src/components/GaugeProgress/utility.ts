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
export const RADIUS = 54;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Defines the location along an SVG path where the dash of a stroke will begin.
// The higher the number, the further along the path the dashes will begin.
export const calcDashoffset = (value: number) =>
  value <= 100 ? CIRCUMFERENCE * (1 - value / 100) : 0;

export const renderTextValue = (limitDigits: number) => (value: number) => {
  const rounded = Math.ceil(value);
  const lenRounded = String(rounded).length;
  return lenRounded <= limitDigits ? `${rounded}%` : `>100%`;
};

export const renderTextValueMax4Digits = renderTextValue(4);
