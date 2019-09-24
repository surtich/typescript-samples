import reduce from "./reduce";

var mapReducer = function<T, R>(f: (x: T) => R) {
  return function reducer(acc: R[], x: T): R[] {
    return [...acc, f(x)];
  };
};

export default function map<T, R>(f: (x: T) => R, xs: T[]): R[] {
  return reduce(mapReducer(f), xs, []);
}
