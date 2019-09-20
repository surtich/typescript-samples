import filter from "../filter";
import { isOdd, greaterThanThree } from "../utillity_functions";

describe("Filter tests", function() {
  it("should remove the pair numbers", function() {
    expect(filter(isOdd, [1, 2, 3, 7, 8, 9])).toEqual([1, 3, 7, 9]);
  });
  it("should return strings of length greater than three", function() {
    expect(filter(greaterThanThree, ["Pedro", "Juan", "Ana"])).toEqual([
      "Pedro",
      "Juan"
    ]);
  });
});
