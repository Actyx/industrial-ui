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
