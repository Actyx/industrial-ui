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
import { range } from './numeral';

describe('numeral', () => {
  describe('range', () => {
    it('should return an array of numbers in the range from 0 to 8 included', () => {
      const result = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      expect(range(0, 9)).toEqual(result);
      expect(range(0, 9)).not.toEqual([-1, result]);
      expect(range(0, 9)).not.toEqual([...result, 9]);
    });
    it('should return an array of numbers in the range from 7 to 9 included', () => {
      const result = [7, 8, 9];
      expect(range(7, 10)).toEqual(result);
      expect(range(7, 10)).not.toEqual([6, ...result]);
      expect(range(7, 10)).not.toEqual([...result, 10]);
    });
  });
});
