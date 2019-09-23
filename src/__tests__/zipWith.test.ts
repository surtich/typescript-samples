import zipWith from "../zipWith";
import { max, pair } from "../utillity_functions";

describe("ZipWith tests", function() {
  it("should pair arrays", function() {
    expect(zipWith(pair, [1, 2, 3], ["Pedro", "Ana"])).toEqual([
      [1, "Pedro"],
      [2, "Ana"]
    ]);
  });
  it("should pair and max arrays", function() {
    expect(zipWith(max, [1, 8, 3], [7, 2])).toEqual([7, 8]);
  });
});
