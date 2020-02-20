import { renderTextValueMax4Digits } from './GaugeProgress';

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
