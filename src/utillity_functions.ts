import { curry, filter, map, pipe, when } from "ramda";
import { WORD_SEPARATOR, INVALID_WORDS } from "./data";

export var add = curry(function(x: number, y: number) {
  return x + y;
});

// export var inc = (x: number) => add(1)(x);
export var inc = add(1); // point free style version

export var double = (x: number) => x * 2;
export var toUpperCase = (x: string) => x.toUpperCase();

export var greaterThanThree = (xs: string) => xs.length > 3;

export var isOdd = (x: number) => x % 2 != 0;
export var isPair = (x: number) => x % 2 == 0;
// export var not = (f: ???) => !f

export var max = (x: number, y: number) => (x > y ? x : y);
export var min = (x: number, y: number) => (x < y ? x : y);

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

export var words = (xs: string): string[] =>
  xs.match(new RegExp(`[^${WORD_SEPARATOR}]+`, "g")) || [];

export var unwords = (separator = "") => (xs: string[]) =>
  xs.join(separator) + separator;

export var initial = (xs: string) => xs[0];

export var repeat = (times: number) => (xs: string): string =>
  times === 0 ? "" : xs + repeat(times - 1)(xs);

export var acronymize = (
  phrase: string,
  separator = "",
  capitalize = true,
  pluralize = false
) =>
  pipe(
    words,
    filter(word => !INVALID_WORDS.includes(word.toLocaleLowerCase())),
    map(initial),
    when(() => capitalize, map(toUpperCase)),
    when(() => pluralize, map(repeat(2))),
    unwords(separator)
  )(phrase);
