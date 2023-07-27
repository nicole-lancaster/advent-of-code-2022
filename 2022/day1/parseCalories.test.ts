import { parseCalories } from "./parseCalories";

describe("parseCalories function", () => {
  test("should successfully read input file and parse data", () => {
    // arrange
    const testFile = "mocks/test1.txt";
    // act
    const output = parseCalories(testFile);
    // assert
    expect(output).toEqual([
      [1, 2, 3],
      [3, 3, 3, 4],
      [2, 1, 555],
    ]);
  });
});
