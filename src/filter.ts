export default function filter<T>(f: (x: T) => boolean, xs: T[]): T[] {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i])) {
      ys.push(xs[i]);
    }
  }
  return ys;
}
