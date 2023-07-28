import { countCaloriesOfTopThreeElves } from "./calorieCountTopThree";

describe("countMaxCalories function", () => {
  test("should return the greatest number when each sub array is summed", () => {
    // arrange
    const input = [
      [1, 2, 3],
      [3, 3, 3, 4],
      [2, 1, 555],
    ];
    // act
    const output = countCaloriesOfTopThreeElves(input).slice(-1)[0]; // no slicing/logic in test
    // assert
    expect(output).toEqual(558);
  });
});
