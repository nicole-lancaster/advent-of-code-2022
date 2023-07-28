import { parseCalories } from "./parseCalories";

describe("parseCalories function", () => {
  test("should successfully read input file and parse data", () => {
    const testFile = "mocks/test1.txt";
    const output = parseCalories(testFile);
    expect(output).toEqual([
      [1, 2, 3],
      [3, 3, 3, 4],
      [2, 1, 555],
    ]);
  });
});
