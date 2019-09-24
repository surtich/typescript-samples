import reduce from "../reduce";
import { add, max, maxLengthString, maxString } from "../utillity_functions";

describe("Reduce tests", function() {
  it("should sum array of numbers ", function() {
    expect(reduce<number, number>(add, [], 0)).toBe(0);
    expect(reduce(add, [6], 0)).toBe(6);
    expect(reduce(add, [-5, 6], 0)).toBe(1);
    expect(reduce(add, [1, 2, 3, 7, 8, 9], 0)).toBe(30);
  });

  it("should return the max array value", function() {
    expect(reduce(max, [7, 8, 9])).toBe(9);
    expect(reduce(max, [7, 9, 8])).toBe(9);
    expect(reduce(max, [9, 8])).toBe(9);
    expect(reduce(max, [9])).toBe(9);
    expect(reduce(max, [-8, -1])).toBe(-1);
    expect(reduce(max, [], 0)).toBe(0);
    expect(() => reduce(max, [])).toThrow(
      new TypeError("Reduce of empty array with no initial value")
    );
  });

  it("should return the max length of string array", function() {
    expect(reduce(maxLengthString, ["Pepe", "Pedro", "Luisa"], 0)).toBe(5);
    expect(reduce(maxLengthString, [], 0)).toBe(0);
  });

  it("should return the max string length of string array", function() {
    expect(reduce(maxString, ["Pepe", "Pedro", "Luisa"], [])).toEqual([
      "Pedro",
      "Luisa"
    ]);
    expect(reduce(maxString, ["Pepe", "Pedro", "Luisa", "Ana"], [])).toEqual([
      "Pedro",
      "Luisa"
    ]);
    expect(reduce(maxString, ["Pepe", "Pedro", "Luisa", "Javier"], [])).toEqual(
      ["Javier"]
    );
  });
});
