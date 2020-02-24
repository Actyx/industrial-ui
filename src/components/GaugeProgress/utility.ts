export const RADIUS = 54;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Defines the location along an SVG path where the dash of a stroke will begin.
// The higher the number, the further along the path the dashes will begin.
export const calcDashoffset = (value: number) =>
  value <= 100 ? CIRCUMFERENCE * (1 - value / 100) : 0;

export const renderTextValue = (limitDigits: number) => (value: number) => {
  const rounded = Math.ceil(value);
  const lenRounded = String(rounded).length;
  return lenRounded <= limitDigits ? `${rounded}%` : `>100%`;
};

export const renderTextValueMax4Digits = renderTextValue(4);
