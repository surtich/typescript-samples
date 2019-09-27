function compose<X, Y, Z>(g: (y: Y) => Z, f: (x: X) => Y): (x: X) => Z {
  return function(x: X) {
    return g(f(x));
  };
}

export default compose;
