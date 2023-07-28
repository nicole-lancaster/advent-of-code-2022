import { countAllCaloriesAndSort } from "./countAllCaloriesAndSort";

describe("countCalories function", () => {
  test("should return an array of the greatest top three numbers when each sub array is summed", () => {
    // arrange
    const input = [
      [1, 2, 3],
      [3, 3, 3, 4],
      [2, 1, 555],
      [4, 5],
      [9, 1],
    ];
    // act
    const output = countAllCaloriesAndSort(input);
    // assert
    expect(output).toBeInstanceOf(Array);
    expect(output).toHaveLength(5);
    expect(output).toEqual([6, 9, 10, 13, 558]);
  });
});
