export default function reduce<T, R>(
  f: (acc: R, x: T) => R,
  xs: T[],
  init?: R
) {
  var result;
  if (init == undefined && arguments.length == 2) {
    if (xs.length == 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    result = xs[0];
  } else {
    result = init;
  }
  for (var i = 0; i < xs.length; i++) {
    result = f(result as any, xs[i]);
  }
  return result;
}
