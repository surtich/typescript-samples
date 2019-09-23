import { min } from "./utillity_functions";

var zipWith = <T, R, S>(f: (x: T, y: R) => S, xs: T[], ys: R[]): S[] => {
  var result: S[] = [];
  for (var i = 0, m = min(xs.length, ys.length); i < m; i++) {
    result.push(f(xs[i], ys[i]));
  }
  return result;
};

export default zipWith;
