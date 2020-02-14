import { theme } from './theme';

describe('theme utils', () => {
  it('rgba should fail when color is wrong', () => {
    expect(() => theme.utils.rgba('#fff', 0)).toThrow();
  });

  it('rgba should get color function with opacity', () => {
    expect(theme.utils.rgba('#ffffff', 0.5)).toEqual('rgba(255, 255, 255, 0.5)');
  });
});
