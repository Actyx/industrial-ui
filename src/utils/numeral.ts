export const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (v, k) => k + start);

export const normalize = (value: number, min: number, max: number) =>
  Math.min(Math.max(min, value), max);
