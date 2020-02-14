export const range = (start: number, end: number) =>
  Array(end)
    .fill(undefined)
    .map((n, i) => i + start);
