export default function curry<T, R>(f: (...xs: T[]) => R) {
  var _curry = (...xs: T[]) => (...ys: T[]) => {
    if (xs.length + ys.length >= f.length) {
      return f(...xs, ...ys);
    }
    return _curry(...xs.concat(ys));
  };
  return _curry();
}
