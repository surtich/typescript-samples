var flatMap = <T, R>(f: (x: T) => R[], xs: T[]): R[] =>
  xs.length === 0 ? [] : [...f(xs[0]), ...flatMap(f, xs.slice(1))];

export default flatMap;
