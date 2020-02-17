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
