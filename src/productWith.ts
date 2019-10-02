import { map } from "ramda";
import flatmap from "./flatmap";

var scalarProduct = <T, R, S>(f: (x: T, y: R) => S, ys: R[]) => (x: T) =>
  map(y => f(x, y), ys);

var productWith = <T, R, S>(f: (x: T, y: R) => S, xs: T[], ys: R[]): S[] =>
  flatmap(scalarProduct(f, ys), xs);

export default productWith;
