import rotate from "../rotate";
import { isOdd, greaterThanThree } from "../utillity_functions";

describe("Rotate tests", function() {
  it("should rotate an array", function() {
    expect(rotate([1, 2, 3])).toEqual([2, 3, 1]);
  });
});
