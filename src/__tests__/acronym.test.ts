import { acronymize, initial, words } from "../utillity_functions";

describe("Acronym tests", function() {
  it("words function should convert a phrase in word array", function() {
    expect(words("Organización de,, Naciones ,  Unidas")).toEqual([
      "Organización",
      "de",
      "Naciones",
      "Unidas"
    ]);
    expect(words(",, ")).toEqual([]);
  });
  it("initial function should return the first character", function() {
    expect(initial("organización")).toEqual("o");
  });
  it("should return the acronym with default parameters", function() {
    expect(acronymize("Organización de naciones unidas")).toEqual("ONU");
  });
  it("should return the acronym with default parameters and multiple word separators", function() {
    expect(acronymize("Organización de,, Naciones ,  Unidas")).toEqual("ONU");
  });
  it("should return empty acronym acronym with no valid words", function() {
    expect(acronymize(".... de ,")).toEqual("");
  });
  it("should use the passed separator", function() {
    expect(acronymize("Organización de naciones Unidas", ".")).toEqual(
      "O.N.U."
    );
  });
  it("should keep the original capitalization with capitalize false", function() {
    expect(acronymize("Organización de naciones Unidas", "", false)).toEqual(
      "OnU"
    );
  });
  it("should pluralize", function() {
    expect(acronymize("Estados Unidos", "", true, true)).toEqual("EEUU");
  });
});
