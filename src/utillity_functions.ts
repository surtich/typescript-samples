export var add = (x: number, y: number) => x + y;
export var double = (x: number) => x * 2;
export var toUpperCase = (x: string) => x.toUpperCase();

export var greaterThanThree = (xs: string) => xs.length > 3;

export var isOdd = (x: number) => x % 2 != 0;
export var isPair = (x: number) => x % 2 == 0;

export var max = (x: number, y: number) => (x > y ? x : y);
export var min = (x: number, y: number) => (x < y ? x : y);

// export var not = (f: ???) => !f

export var maxLengthString = (limit: number, xs: string) =>
  limit > xs.length ? limit : xs.length;

export var maxString = (maxXs: string[], xs: string): string[] => {
  if (maxXs.length === 0 || xs.length > maxXs[0].length) {
    return [xs];
  } else if (xs.length == maxXs[0].length) {
    return [...maxXs, xs];
  }
  return maxXs;
};

export var pair = <T, R>(x: T, y: R): [T, R] => [x, y];
