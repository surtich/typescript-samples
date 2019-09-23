export default function map<T, R>(f: (x: T) => R, xs: T[]): R[] {
  if (xs.length === 0) {
    return [];
  } else {
    return [f(xs[0])].concat(map(f, xs.slice(1)));
  }
}

/*

import reduce from "./reduce";

var mapReducer =  function<T, R>(f: (x: T) => R) {
  return function reducer (???) {}
};
export default function map<T, R>(f: (x: T) => R, xs: T[]): R[] {
  return reduce(mapReducer(f), ?????)
}

*/
