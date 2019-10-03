function compose<X, Y, Z>(g: (y: Y) => Z, f: (x: X) => Y): (x: X) => Z {
  return function(x: X) {
    return g(f(x));
  };
}

function flatMap<X, Y, Z>(
  g: (y: Y) => (x: X) => Z,
  f: (x: X) => Y
): (x: X) => Z {
  return (x: X) => g(f(x))(x);
}

var head = <T>(xs: T[]): T => xs[0];
var tail = <T>(xs: T[]): T[] => xs.slice(1);
var append = <T>(x: T) => (xs: T[]): T[] => xs.concat(x);

var rotate = <T>(xs: T[]): T[] => tail(append(head(xs))(xs));

var cool_rotate = <T>(xs: T[]) =>
  compose(
    // @ts-ignore
    tail,
    // @ts-ignore
    flatMap(append, head)
  )(xs);

export default cool_rotate;
