import { sumHighestThreeCalories } from "../../2022/day1/highestThreeCalories";

describe("countHighestThreeCalories function", () => {
  test("should return an array oft the top three highest number of calories", () => {
    const input = [6, 9, 10, 13, 558];
    const output = sumHighestThreeCalories(input);
    expect(output).toBe(581);
  });
});
