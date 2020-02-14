import { getColorFromLevel, getColorFromVariant, getWidthFromLevel } from './BatteryIcon';

const COLOR_GREEN = '#22dd55';
const COLOR_ORANGE = '#ff9900';
const COLOR_RED = '#e16464';
const COLOR_WHITE = '#ffffff';
const COLOR_BLACK = '#000000';

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
