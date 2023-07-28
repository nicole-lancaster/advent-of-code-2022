import { countMaxCalories } from "./calorieCountMax";

describe("countMaxCalories function", () => {
  test("should return the greatest number when each sub array is summed", () => {
    // arrange
    const input = [3, 5, 32];
    // act
    const output = countMaxCalories(input);
    // assert
    expect(output).toEqual(32);
  });
});
