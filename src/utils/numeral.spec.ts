import { range } from './numeral';

describe('numeral', () => {
  describe('range', () => {
    it('should return an array of numbers in the range from 0 to 8 included', () => {
      const result = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      expect(range(0, 9)).toEqual(result);
      expect(range(0, 9)).not.toEqual([...result, 9]);
    });
  });
});
