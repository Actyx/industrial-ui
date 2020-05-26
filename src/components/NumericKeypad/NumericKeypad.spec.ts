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
import { handleDecimalEnter, handleMinusEnter, handleOnChange } from './NumericKeypad';

describe('<NumericKeypad />', () => {
  describe('handleDecimalEnter', () => {
    it('should add new digit if current value has no decimal symbol', () => {
      expect(handleDecimalEnter('', '1')).toEqual('1');
      expect(handleDecimalEnter('1', '2')).toEqual('12');
    });

    it('should add new digit if current value has digital symbol', () => {
      expect(handleDecimalEnter('1.', '2')).toEqual('1.2');
    });

    it('should add decimal symbol if current value has no decimal symbol', () => {
      expect(handleDecimalEnter('1', '.')).toEqual('1.');
      expect(handleDecimalEnter('12', '.')).toEqual('12.');
    });

    it('should not add decimal symbol if current value has decimal symbol', () => {
      expect(handleDecimalEnter('1.', '.')).toEqual('1.');
      expect(handleDecimalEnter('1.2', '.')).toEqual('1.2');
    });
  });

  describe('handleMinusEnter', () => {
    it('should add minus symbol if current value has no input', () => {
      expect(handleMinusEnter('', '-')).toEqual('-');
    });

    it('should reset current value and add minus symbol', () => {
      expect(handleMinusEnter('1', '-')).toEqual('-');
      expect(handleMinusEnter('123', '-')).toEqual('-');
    });

    it('should keept current value without accepting additional minus symbol', () => {
      expect(handleMinusEnter('0', '-')).toEqual('-');
      expect(handleMinusEnter('-1', '-')).toEqual('-1');
      expect(handleMinusEnter('-123', '-')).toEqual('-123');
      expect(handleMinusEnter('-', '-')).toEqual('-');
    });
  });

  describe('handleOnChange', () => {
    it('should not call a callback when value is not number', () => {
      const cb = jest.fn();
      handleOnChange('.', cb);
      expect(cb).not.toBeCalled();

      handleOnChange('-', cb);
      expect(cb).not.toBeCalled();
    });

    it('should call a callback when value is number', () => {
      const cb = jest.fn();
      handleOnChange('1', cb);
      expect(cb).toBeCalled();

      handleOnChange('1.2', cb);
      expect(cb).toBeCalled();

      handleOnChange('.1', cb);
      expect(cb).toBeCalled();

      handleOnChange('1.', cb);
      expect(cb).toBeCalled();

      handleOnChange('-1', cb);
      expect(cb).toBeCalled();

      handleOnChange('-1.2', cb);
      expect(cb).toBeCalled();

      handleOnChange('-.1', cb);
      expect(cb).toBeCalled();

      handleOnChange('-1.', cb);
      expect(cb).toBeCalled();
    });
  });
});
