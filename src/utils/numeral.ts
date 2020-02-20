export const range = (start: number, end: number) =>
  Array(end)
    .fill(undefined)
    .map((n, i) => i + start);

export const normalize = (value: number, min: number, max: number) =>
  Math.min(Math.max(min, value), max);
