export const RADIUS = 54;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const calcDashoffset = (value: number) =>
  value <= 100 ? CIRCUMFERENCE * (1 - value / 100) : 0;

export const renderTextValue = (limitDigits: number) => (value: number) => {
  const rounded = Math.ceil(value);
  const lenRounded = String(rounded).length;
  return lenRounded <= limitDigits ? `${rounded}%` : `>100%`;
};

export const renderTextValueMax4Digits = renderTextValue(4);
