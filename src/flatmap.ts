export default function flatmap<T, R>(f: (x: T) => R[], xs: T[]): R[] {
  return xs.length == 0 ? [] : [...f(xs[0]), ...flatmap(f, xs.slice(1))];
}
