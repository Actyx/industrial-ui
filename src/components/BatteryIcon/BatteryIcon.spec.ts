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
import { getColorFromLevel, getColorFromVariant, getWidthFromLevel } from './utility';
import { orange, lightGreen, red, common } from '../../colors';

const COLOR_GREEN = lightGreen.A700;
const COLOR_ORANGE = orange[500];

const COLOR_RED = red[300];
const COLOR_WHITE = common.white;
const COLOR_BLACK = common.black;

describe('BatteryIcon', () => {
  describe('getColotFromLevel', () => {
    it('should return green', () => {
      expect(getColorFromLevel(100)).toBe(COLOR_GREEN);
      expect(getColorFromLevel(80)).toBe(COLOR_GREEN);
    });
    it('should return orange', () => {
      expect(getColorFromLevel(20)).toBe(COLOR_ORANGE);
      expect(getColorFromLevel(15)).toBe(COLOR_ORANGE);
    });
    it('should return red', () => {
      expect(getColorFromLevel(10)).toBe(COLOR_RED);
      expect(getColorFromLevel(0)).toBe(COLOR_RED);
      expect(getColorFromLevel(-10)).toBe(COLOR_RED);
    });
  });

  describe('getWidthFromLevel', () => {
    it('should return 100% width', () => {
      expect(getWidthFromLevel(100)).toBe(41);
    });
    it('should return 50% width', () => {
      expect(getWidthFromLevel(50)).toBe(21);
    });
    it('should return 0% width', () => {
      expect(getWidthFromLevel(0)).toBe(0);
    });
  });

  describe('getColorFromVariant', () => {
    it('should return white', () => {
      expect(getColorFromVariant('light')).toBe(COLOR_WHITE);
    });
    it('should return black', () => {
      expect(getColorFromVariant('dark')).toBe(COLOR_BLACK);
    });
  });
});
