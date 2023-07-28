import { countCaloriesOfTopThreeElves } from "./calorieCountTopThree";

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
    const output = countCaloriesOfTopThreeElves(input);
    // assert
    expect(output).toEqual([10, 13, 558]);
  });
});
