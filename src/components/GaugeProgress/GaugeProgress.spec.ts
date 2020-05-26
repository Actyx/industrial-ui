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
import { renderTextValueMax4Digits, calcDashoffset } from './utility';

describe('GaugeProgress - utility', () => {
  describe('renderTextValue', () => {
    it('should render integet with percentage within 5 digits limit', () => {
      expect(renderTextValueMax4Digits(100)).toBe('100%');
      expect(renderTextValueMax4Digits(2000)).toBe('2000%');
      expect(renderTextValueMax4Digits(30000)).toBe('>100%');
      expect(renderTextValueMax4Digits(400000)).toBe('>100%');
      expect(renderTextValueMax4Digits(0.5)).toBe('1%');
      expect(renderTextValueMax4Digits(0.51)).toBe('1%');
      expect(renderTextValueMax4Digits(100.51234)).toBe('101%');
      expect(renderTextValueMax4Digits(1000.51234)).toBe('1001%');
      expect(renderTextValueMax4Digits(10000.51234)).toBe('>100%');
    });
  });
  describe('calcDashoffset', () => {
    it('should calculate the start location of the svg stroke path', () => {
      expect(calcDashoffset(54)).toEqual(156.0743230303409);
      expect(calcDashoffset(200)).toEqual(0);
    });
  });
});
