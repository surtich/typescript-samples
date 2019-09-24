import { append, chain, head } from "ramda";
import { add, pair, product } from "../utillity_functions";

describe("FlatMap tests", function() {
  it("should product two arrays", function() {
    expect(product(pair, [1, 2, 3], ["a", "b"])).toEqual([
      [1, "a"],
      [1, "b"],
      [2, "a"],
      [2, "b"],
      [3, "a"],
      [3, "b"]
    ]);
    expect(product(add, [1, 2, 3], [4, 5])).toEqual([5, 6, 6, 7, 7, 8]);
  });
  it("should compose two functions", function() {
    expect(chain(append, head)([1, 2, 3])).toEqual([1, 2, 3, 1]);
  });
});
