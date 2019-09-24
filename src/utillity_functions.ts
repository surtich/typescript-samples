import { chain, curry, map } from "ramda";

export var add = curry(function(x: number, y: number) {
  return x + y;
});

// export var inc = (x: number) => add(1)(x);
export var inc = add(1); // point free style version

export var double = (x: number) => x * 2;
export var toUpperCase = (x: string) => x.toUpperCase();

export var greaterThanThree = (xs: string) => xs.length > 3;

export var isOdd = (x: number) => x % 2 != 0;
export var isPair = (x: number) => x % 2 == 0;
// export var not = (f: ???) => !f

export var max = (x: number, y: number) => (x > y ? x : y);
export var min = (x: number, y: number) => (x < y ? x : y);

export var maxLengthString = (limit: number, xs: string) =>
  limit > xs.length ? limit : xs.length;

export var maxString = (maxXs: string[], xs: string): string[] => {
  if (maxXs.length === 0 || xs.length > maxXs[0].length) {
    return [xs];
  } else if (xs.length == maxXs[0].length) {
    return [...maxXs, xs];
  }
  return maxXs;
};

export var pair = <T, R>(x: T, y: R): [T, R] => [x, y];

export var combine = <T, R, S>(f: (x: T, y: R) => S, ys: R[]) => (x: T) =>
  map(y => f(x, y), ys);

export var product = <T, R, S>(f: (x: T, y: R) => S, xs: T[], ys: R[]) =>
  chain(combine(f, ys), xs);

export var head = <T>(xs: T[]) => xs[0];
export var append = <T>(x: T) => (xs: T[]) => [...xs, x];
