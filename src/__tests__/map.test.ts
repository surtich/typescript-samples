import map from "../map";
import { double, inc, isOdd, toUpperCase } from "../utillity_functions";

describe("Map tests", function() {
  it("should double the array values", function() {
    expect(map(double, [])).toEqual([]);
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
  });
  it.only("should inc the array values", function() {
    expect(map(inc, [1, 2, 3])).toEqual([2, 3, 4]);
  });
  it("IsOdd array tests", function() {
    expect(map(isOdd, [1, 2, 3])).toEqual([true, false, true]);
  });
  it("ToUpperCase tests", function() {
    expect(map(toUpperCase, ["Pedro", "Juan", "Ana"])).toEqual([
      "PEDRO",
      "JUAN",
      "ANA"
    ]);
  });
});
