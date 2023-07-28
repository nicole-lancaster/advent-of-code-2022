import { countAllCaloriesAndSort } from "./countAllCaloriesAndSort";

describe("countMaxCalories function", () => {
  test("should return the greatest number when each sub array is summed", () => {
    // arrange
    const input = [
      [1, 2, 3],
      [3, 3, 3, 4],
      [2, 1, 555],
    ];
    // act
    const output = countAllCaloriesAndSort(input);
    // assert
    expect(output).toEqual(558);
  });
});
