export default function sumarray(xs: number[]): number {
  var a = 0;
  xs.forEach(element => {
    a += element;
  });

  return a;
}

function maxarray(xs: number[]) {
  var max: number | undefined;
  xs.forEach(element => {
    if (max == undefined) {
      max = element;
    } else if (element > max) {
      max = element;
    }
  });

  return max;
}

function maxLenArray(xs: string[]) {
  var max: number | undefined;
  xs.forEach(element => {
    if (max == undefined) {
      max = element.length;
    } else if (element.length > max) {
      max = element.length;
    }
  });

  return max;
}

function add(x: number, y: number) {
  return x + y;
}

function max(x: number, y: number) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function maxString(x: number, y: string) {
  if (x > y.length) {
    return x;
  } else {
    return y.length;
  }
}

function reduce<T, R>(f: (x: R, y: T) => R, xs: T[], acc: R) {
  for (var i = 0; i < xs.length; i++) {
    acc = f(acc, xs[i]);
  }
  return acc;
}

console.log(reduce(add, [2, 3, 4, 5], 0));
console.log(reduce(max, [2, 3, 4, 5], 0));
console.log(reduce(maxString, ["Pepe", "Pili", "Pablete", "Jose"], 0));
