import { parseEncodedMoves } from "./parseEncodedMoves";

describe.only("parseInputs function", () => {
  test("should successfully read input file and parse data", () => {
    const testFile = "mocks/test-input.txt";
    const output = parseEncodedMoves(testFile);
    expect(output).toEqual([["C Z"], ["A X"], ["C Y"], ["B Z"], ["C X"]]);
  });
});
