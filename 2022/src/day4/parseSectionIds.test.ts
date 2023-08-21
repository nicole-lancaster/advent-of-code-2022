import { parseSectionIds } from "./parseSectionIds";

describe("parseSectionIds function", () => {
  test("should successfully read input file and parse data into a 2D array fo strings of two pairs", () => {
    const testFile = "mocks/test-input.txt";
    const output = parseSectionIds(testFile);
    expect(output).toEqual([
      ["3-89", "4-80"],
      ["4-88", "6-82"],
      ["69-75", "70-76"],
    ]);
  });
});
