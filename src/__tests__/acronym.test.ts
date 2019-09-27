import acronymize from "../acronymize";

describe("Acronym tests", function() {
  it(".....", function() {
    expect(acronymize("Organización de naciones DE unidas")).toEqual("ONU");
    expect(acronymize("Organización de naciones DE unidas", ".")).toEqual(
      "O.N.U."
    );
    expect(acronymize("Estados Unidos", "", true)).toEqual("EEUU");
    expect(acronymize("Estados unidos", "", true, false)).toEqual("EEuu");
    expect(acronymize("", ".", true, false)).toEqual("");
  });
});
