export default function map<T, R>(f: (x: T) => R, xs: T[]) {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    ys.push(f(xs[i]));
  }
  return ys;
}
