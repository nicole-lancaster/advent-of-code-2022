import { parseScrambledRucksack } from "./rucksackReorganisation";

describe("rucksackReorganisation function", () => {
  test("should successfully read input file and parse data", () => {
    const testFile = "mocks/test-input.txt";
    const output = parseScrambledRucksack(testFile);
    expect(output).toEqual([
      [
        ["J", "p", "g", "W"],
        ["r", "h", "p", "c"],
      ],
      [
        ["s", "F", "M", "f", "s"],
        ["F", "S", "r", "r", "F"],
      ],
    ]);
  });
});
