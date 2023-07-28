import { countMaxCalories } from "./calorieCountMax";

describe("countMaxCalories function", () => {
  test("should return the greatest number of calories from an input array of summed, sorted calories", () => {
    const input = [3, 5, 32];
    const output = countMaxCalories(input);
    expect(output).toEqual(32);
  });
});
