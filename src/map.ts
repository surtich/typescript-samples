function map<T, R>(f: (x: T) => R, xs: T[]) {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    ys.push(f(xs[i]));
  }
  return ys;
}

var add = (x: number, y: number) => x + y;
var double = (x: number) => x * 2;
var isOdd = (x: number) => x % 2 == 0;
var toUpperCase = (x: string) => x.toUpperCase();

console.log(map(double, [1, 2, 3]));
console.log(map(isOdd, [1, 2, 3]));
console.log(map(toUpperCase, ["Pedro", "Juan", "Ana"]));
