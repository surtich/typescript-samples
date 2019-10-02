import productWith from "../productWith";
import { max, pair } from "../utillity_functions";

describe("product tests", function() {
  it("should product arrays", function() {
    expect(productWith(pair, [1, 2, 3], ["Pedro", "Ana"])).toEqual([
      [1, "Pedro"],
      [1, "Ana"],
      [2, "Pedro"],
      [2, "Ana"],
      [3, "Pedro"],
      [3, "Ana"]
    ]);
  });
  it("should prodcuct and max arrays", function() {
    expect(productWith(max, [1, 8, 3], [7, 2])).toEqual([7, 2, 8, 8, 7, 3]);
  });
});
