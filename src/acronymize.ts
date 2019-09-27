import { always, compose, filter, map, when } from "ramda";
import {
  append,
  initial,
  repeat,
  toUpperCase,
  unwords,
  words
} from "./utillity_functions";

import { INVALID_WORDS } from "./data";

export var isValidWord = (word: string) =>
  !INVALID_WORDS.includes(word.toLowerCase());

var toCharAcrom = (separator = "", pluralize = true, capitalize = false) =>
  compose(
    append(separator),
    when(always(pluralize), repeat(2)),
    when(always(capitalize), toUpperCase),
    initial
  );

filter(isValidWord)(["dddd"]);

var acronymize = (
  phrase: string,
  separator = "",
  pluralize = false,
  capitalize = true
) =>
  compose(
    unwords,
    map(toCharAcrom(separator, pluralize, capitalize)),
    filter(isValidWord),
    words
  )(phrase);

export default acronymize;
