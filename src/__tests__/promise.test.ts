import { promiseInc, promiseMap } from "../promise";

describe("Promise tests", function() {
  it("should inc the array values", function(done) {
    expect.assertions(1);
    promiseMap(promiseInc, [1, 2, 3]).then(xs => {
      expect(xs).toEqual([2, 3, 4]);
      done();
    });
  });
});
