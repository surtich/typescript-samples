export default function map<T, R>(f: (x: T) => R, xs: T[]): R[] {
  if (xs.length === 0) {
    return [];
  } else {
    return [f(xs[0])].concat(map(f, xs.slice(1)));
  }
}
